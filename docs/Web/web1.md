---
sidebar_position: 1
---

# Docusaurus Algoria 

## Docusaurus Algoria Installation

On windows, Docusaurus Algoria installation sometimes fails because the docker cmd is different from linux.

### Error 

```bash
Traceback (most recent call last): File "/root/src/config/config_loader.py", line 101, in _load_config
```

### Solution

If you have Git bash, open the git bash and use the below command.

```bash
winpty docker run -it --env-file=.env -e "CONFIG=$(cat ./config.json | jq -r tostring)" algolia/docsearch-scraper
```

:::note

`Stackoverflow` : [Reference 1](https://stackoverflow.com/questions/65807537/algolia-run-the-crawl-from-the-docker-image)

:::