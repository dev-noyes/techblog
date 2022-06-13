# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.


## 1.1.0

- 모바일 마케팅페이지 추가
- 메인 페이지 수정

## 1.0.10

- delete i18n function only korean
- beta 21 version
- @mdx-js/react 이 1.6.22 여야만한 최신버전 지원 안됨.
- netlify 에 환경변수 node_version : v16.15.0 추가  

## 1.0.9

- change icon color
- add blog and contents
- add app-ads.txt to static files
- change sitemap.xml

## 1.0.8

- build error supports

## 1.0.7

- Korean supports - i18n 

## 1.0.6

- PWA supports

## 1.0.5

- change profile img on blog
- Algolia .env setting 

## 1.0.4

- change logo svg
- robots.txt to static folder

## 1.0.3

- add version code
- SEO supports

## v1.0.2

- add Algolia
- docker cmd on windows

`using git bash`

`winpty docker run -it --env-file=.env -e "CONFIG=$(cat ./config.json | jq -r tostring)" algolia/docsearch-scraper`