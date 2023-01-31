FROM ubuntu:18.04

# Allow automated installation of packages
ENV DEBIAN_FRONTEND=noninteractive

# Do not update initramfs (initramfs-tools)
ENV INITRD NO

# Install Apache server
RUN apt-get update && apt-get install -y apache2 libapache2-mod-php  wget vim && apt-get clean

# Add web content
ADD files/internal.tgz /var/www/
ADD files/public.tgz /var/www/
RUN chown -R www-data:www-data /var/www/

# Configure Apache server
COPY files/ports.conf /etc/apache2/ports.conf
RUN chown root:root /etc/apache2/ports.conf
RUN chmod 0644 /etc/apache2/ports.conf
COPY files/000-default.conf /etc/apache2/sites-available/000-default.conf
RUN chown root:root /etc/apache2/sites-available/000-default.conf
RUN chmod 0644 /etc/apache2/sites-available/000-default.conf

# Add flag
COPY files/this_is_the_m-and-ms_flag.txt /

# Apache server variables
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf
ENV APACHE_RUN_USER=www-data
ENV APACHE_RUN_GROUP=www-data
ENV APACHE_LOG_DIR=/var/log/apache2
ENV APACHE_LOCK_DIR=/var/lock/apache2
ENV APACHE_PID_FILE=/var/run/apache2.pid
ENV APACHE_RUN_DIR=/var/run/apache2


EXPOSE 80 12322
CMD /usr/sbin/apache2 -DFOREGROUND
