rm -rf dist/

# rm -rf /home/premendra/Downloads/apache-tomcat-8.5.40/webapps/routing-final-prem

npm run buildForTomcat

cd  dist/my-first-app
jar -cvf routing-final.war *

cd ../..

cp dist/my-first-app/routing-final.war /home/premendra/Downloads/apache-tomcat-8.5.40/webapps

pwd
# cp -vr dist/routing-final/. /home/premendra/Downloads/apache-tomcat-8.5.40/webapps/routing-final-prem