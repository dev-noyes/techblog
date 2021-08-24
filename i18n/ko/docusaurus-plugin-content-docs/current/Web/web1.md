---
sidebar_position: 1
---

# Docusaurus Algoria

## Docusaurus Algoria Installation

Windows환경에서 Docusaurus Algoria 설치시 발생한 문제입니다.


Mac 환경에서 같은 문제가 발생하는지는 확인되지 않았습니다. 

### Error 

```bash
Traceback (most recent call last): File "/root/src/config/config_loader.py", line 101, in _load_config
```

### Solution

Git bash 가 있다면 git bash 를 연다. Git bash의 커맨드는 밑의 커맨드를 이용하면 된다.

```bash
winpty docker run -it --env-file=.env -e "CONFIG=$(cat ./config.json | jq -r tostring)" algolia/docsearch-scraper
```

:::note

`Stackoverflow` : [참고 링크 1](https://stackoverflow.com/questions/65807537/algolia-run-the-crawl-from-the-docker-image)

:::