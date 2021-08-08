# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## 1.0.5

### change profile img on blog
### algoria .env setting 

## 1.0.4

### change logo svg
### robots.txt to static folder

## 1.0.3

### add version code
### SEO supports

## v1.0.2

### add algoria
### docker cmd on windows

`using git bash`

`winpty docker run -it --env-file=.env -e "CONFIG=$(cat ./config.json | jq -r tostring)" algolia/docsearch-scraper`