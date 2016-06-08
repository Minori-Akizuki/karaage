
set JS_TEST_DRIVER_PATH=src\test\resources\JsTestDriver-1.3.5.jar
set PORT=4224
set OUTPUT_DIR=target\surfire
set BROWSER_PATH="C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"

md %OUTPUT_DIR%
java ^
  -jar %JS_TEST_DRIVER_PATH% ^
  --port %PORT% ^
  --browser %BROWSER_PATH% ^
  --testOutput %OUTPUT_DIR% ^
  --tests all
