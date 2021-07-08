rm -rf dist/

rm -rf /home/premendra/Downloads/apache-tomcat-8.5.40/webapps/angular-tree-example-prem

npm run buildForTomcat

cd  dist/angular-tree-example
jar -cvf angular-tree-example-prem.war *

cd ../..

cp dist/angular-tree-example/angular-tree-example-prem.war /home/premendra/Downloads/apache-tomcat-8.5.40/webapps

pwd
# cp -vr dist/angular-tree-example/. /home/premendra/Downloads/apache-tomcat-8.5.40/webapps/angular-tree-example-prem