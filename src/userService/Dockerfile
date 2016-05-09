FROM microsoft/aspnet:1.0.0-rc1-update1-coreclr

COPY . /userservice
WORKDIR /userservice

RUN ["dnu", "restore"]

EXPOSE 5000
ENTRYPOINT ["dnx", "kestrel"]