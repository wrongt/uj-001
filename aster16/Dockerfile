FROM debian:9.8-slim
LABEL authors="unifun.com"

RUN apt-get update
RUN apt-get install -y procps net-tools
RUN apt-get install -y build-essential
RUN apt-get install -y vim
RUN apt-get install -y git-core subversion libjansson-dev sqlite autoconf automake libxml2-dev libncurses5-dev libtool
RUN apt-get install -y wget libssl-dev libncurses5-dev libnewt-dev libxml2-dev uuid-dev git subversion linux-headers-amd64
RUN apt-get install -y libmysql++-dev default-libmysqlclient-dev zlib1g-dev libcurl4-openssl-dev libspeex-dev unixodbc-dev libltdl-dev
RUN apt-get install -y libedit-dev libsqlite3-dev
RUN mkdir -p /usr/src/asterisk \
    && cd /usr/src \    
    && wget https://downloads.asterisk.org/pub/telephony/asterisk/asterisk-13-current.tar.gz \
    && tar -xzvf /usr/src/asterisk-16-current.tar.gz --strip-components=1 -C /usr/src/asterisk \
    && mv /etc/localtime /etc/localtime.bak \
    && ln -s /usr/share/zoneinfo/Europe/Chisinau /etc/localtime
#RUN cd /usr/src/asterisk \
#    && ./contrib/scripts/install_prereq install -y
RUN apt-get install -y \
  aptitude-common libboost-filesystem1.62.0 libboost-iostreams1.62.0 \
  libboost-system1.62.0 libcgi-fast-perl libcgi-pm-perl libclass-accessor-perl \
  libcwidget3v5 libencode-locale-perl libfcgi-perl libhtml-parser-perl \
  libhtml-tagset-perl libhttp-date-perl libhttp-message-perl libio-html-perl \
  libio-string-perl liblwp-mediatypes-perl libparse-debianchangelog-perl \
  libsigc++-2.0-0v5 libsub-name-perl libtimedate-perl liburi-perl libxapian30
RUN cd /usr/src/asterisk \
    && ./configure --libdir=/usr/lib64 --with-jansson-bundled --with-pjproject-bundled \
    && make menuselect.makeopts \
    && menuselect/menuselect \
  --disable BUILD_NATIVE \
  --enable res_config_mysql \
  --enable app_mysql \
  --enable CORE-SOUNDS-RU-WAV \
  --enable CORE-SOUNDS-RU-ULAW \
  --enable G711_NEW_ALGORITHM \
  --enable G711_REDUCED_BRANCHING \
  --disable cdr_pgsql \
  --disable cdr_csv \
  --disable cdr_sqlite3_custom \
  --enable chan_sip \
  --enable res_snmp \
  menuselect.makeopts \
#FIXME instead of samples preapare simplified configuration  
  && make && make install && make samples && make config
#Install Lame, converting WAV to MP3 app
RUN cd /usr/src \
    && wget https://sourceforge.net/projects/lame/files/lame/3.100/lame-3.100.tar.gz \
    && tar -xzf lame-3.100.tar.gz \
    && cd lame-3.100 \
    && ./configure \
    && make \
    && make install
RUN wget http://asterisk.hosting.lv/bin/codec_g729-ast160-gcc4-glibc-x86_64-pentium4.so -O /usr/lib64/asterisk/modules/g729.so
#RUN yum remove -y *devel
#RUN yum -y autoremove && yum -y clean all && rm -rf /var/cache/yum && rm -rf /usr/src/*
#MAX FILES UP
RUN sed -i 's/'\#\ MAXFILES\=\32768'/'MAXFILES\=\99989'/g' /usr/sbin/safe_asterisk && sed -i 's/TTY=9/TTY=/g' /usr/sbin/safe_asterisk
#VOLUME
ADD extensions.conf /etc/asterisk/extensions.conf
ADD users.conf /etc/asterisk/users.conf
ADD http.conf /etc/asterisk/http.conf
ADD ari.conf /etc/asterisk/ari.conf
ADD asterisk-ldd.conf /etc/ld.so.conf.d/asterisk.conf
RUN ldconfig -v

CMD /usr/sbin/asterisk -f -g 