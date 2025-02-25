---
# This is the icon of the page
icon: state
# This control sidebar order
order: 7
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Storage
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---
# WoPan

WoPan address：**https://pan.wo.cn/**

- :warning: AList v3.19.0 version and above can use this driver

::: tip
~~WoPan使用的是网页端，如果你先使用工具获取了令牌，再去登录网页端会将AList登录的踢下线~~

Conversely, if you log in to the web page first, and then log in to Alist, you will kick the web page to get off the line

Log in to the mobile phone is no problem and will not be squeezed out.

:::

Get the token tool address：**https://alist.nn.ci/tool/wopan/token.html**

- ![](/img/drivers/wopan/wopan-tool.png)



## **root folder ID**

- **Personal cloud：**：**0**
  - Single folder ID：Unknown (wait for replenishment)

- **Family cloud**：Unknown (wait for replenishment)
  - Family cloud Single folder ID：Unknown (wait for replenishment)



## Type

Personal cloud：Put the `family ID` blank is the personal cloud

Family cloud：add `Family ID`



### **AList fill in examples：**

Data obtained by using tools `Refresh_token Fill in the refresh token`, `Access_token fills in access_token`

![](/img/drivers/wopan/add-wopan.png)




### **The default download method used**

```mermaid
---
title: Which download method is used by default?
---
flowchart TB
    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    a1
    end
    a1[302]:::someclass====|default|a2[user equipment]
    classDef someclass fill:#f96
    c1[local proxy]-.alternative.->a2[user equipment]
    b1[Download proxy URL]-.alternative.->a2[user equipment]
    click a1 "../drivers/common.html#webdav-policy"
    click b1 "../drivers/common.html#webdav-policy"
    click c1 "../drivers/common.html#webdav-policy"
```
