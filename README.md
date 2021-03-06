# ServerFetch

> WORK IN PROGRESS

> Do not use this software for your own professionnal server

ServerFetch allows you to log user selected values (System info, GPIO reads, etc) and display them on a web app.

<br/>

## Requirements

* Node & npm
* Typescript (`npm i -g typescript`)
* neofetch (you can install neofetch on windows with [scoop](https://www.makeuseof.com/how-to-install-and-use-neofetch-on-windows/))

<br/>

## Install

Clone the repo

```
git clone https://github.com/matiasvlevi/serverfetch.git
```

Install dependencies, and required configuration files

```sh
npm run config-win 
# or
npm run config-linux
```

This just created a plain `.apirc` and `.env` file.


<br/>

### Install Web app dependencies

```sh
cd ./web/public
npm ci
```

<br/>

### .env

Configuration docs [here](https://github.com/matiasvlevi/serverfetch/blob/main/docs/env.md)


### .apirc

Configuration docs [here](https://github.com/matiasvlevi/serverfetch/blob/main/docs/apirc.md)

You can look for usable templates corresponding to your system in our `./configs` directory. 
Replace your root `.apirc` with the corresponding `./config/distro.apirc`.

If your system is not present, feel free to add it in pull request!



<br/>

## Launching the app

Run the logger and/or Run the server

```
npm run logger
```

```
npm run server
```

<br/>

## Web App preview

The app uses neofetch to get the device's info. 

You can see what OS/distros have a recognized icon [here](https://raw.githack.com/matiasvlevi/serverfetch/main/web/public/distros.html)

<img src="https://i.ibb.co/VHj15Ts/main.png" width="750px"></img>

Your specified charts in `.apirc` are displayed below

<img src="https://i.ibb.co/wzWjR7F/dashboard.png" width="750px"></img>



