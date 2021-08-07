# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## 1.0.3

### add version code
### SEO supports

## v1.0.2

### add algoria
### docker cmd on windows

`using git bash`

`winpty docker run -it --env-file=.env -e "CONFIG=$(cat ./config.json | jq -r tostring)" algolia/docsearch-scraper`