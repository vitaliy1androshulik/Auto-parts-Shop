# https://hub.docker.com/_/microsoft-dotnet
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build

# copy csproj and restore as distinct layers
WORKDIR /src
COPY WebAutoParts.sln ./
COPY WebAutoParts/*.csproj ./WebAutoParts/
RUN dotnet restore

# copy everything else and build app
COPY . .

WORKDIR /src/WebAutoParts
RUN dotnet publish -o /app

# final stage/image
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app .
ENTRYPOINT ["dotnet", "WebAutoParts.dll"]