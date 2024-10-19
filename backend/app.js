var createError = require('http-errors');
var express = require('express');
const expressSession = require('express-session');
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const router = express.Router();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userRouter = require('./routes/user');
var signupRouter = require('./routes/signup');
var signupValidateRouter = require('./routes/signupValidate');
var topRouter = require('./routes/top');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');

var app = express();

app.set("trust proxy", 1);

// ------ cookie,sessionの設定 ------- //
// expressSessionのオプションは以下参照
// https://github.com/expressjs/session
const session = expressSession({
  secret: 'catIsKawaii', // 環境変数で設定などする。今回は省略して固定値
  resave: false,
  saveUninitialized: true,
  rolling: true,
  proxy: false, // reverse proxy経由などの場合はtrueにする。環境で分けるようにする。今回は省略
  cookie: {
    secure: true, // httpsならtrueにする。環境で分けるなどする。今回は省略
    httpOnly: true,
    rolling: false,
    maxAge: 24 * 60 * 60 * 1000, // ミリ秒で指定。環境変数で設定するべきだが、今回は省略
  },
});

app.use(session);

app.use(
  cors({
    // cookieの送受信を可能にする
    credentials: true,
    // 許可するドメイン登録
    origin: ['https://localhost:3000', 'https://192.168.0.17:3000'],
  }),
);

// ------ ルーティングのログ出力など共通処理 ------ //
router.all('/*', (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/user', userRouter);
app.use('/signup', signupRouter);
app.use('/signupValidete', signupValidateRouter);
app.use('/top', topRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
