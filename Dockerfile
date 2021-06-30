# ベースイメージ
FROM tomcat:9.0.36-jdk11-corretto

# ビルド成果物をコピーする
COPY target/sample1-pl-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps/sample1-pl.war

# tomcat の待ち受けポートを 80 に変更
RUN sed -i -e "s/8080/80/g" conf/server.xml

# サービス開始
CMD ["catalina.sh", "run"]

