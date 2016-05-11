FROM microsoft/aspnet:1.0.0-rc1-update1-coreclr

COPY . /userservice
WORKDIR /userservice

RUN ["dnu", "restore"]

EXPOSE 5004
ENTRYPOINT ["dnx", "-p", "project.json", "kestrel"]
