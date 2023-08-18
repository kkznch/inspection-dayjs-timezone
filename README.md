# dayjs timezone検証
## Install
```sh
$ git clone git@github.com:kkznch/inspection-dayjs-timezone.git
$ cd inspection-dayjs-timezone
$ docker compose build
```

## Usage
- タイムゾーンの確認
  ```sh
  $ docker compose run node date
  ```
- 検証用ファイルの実行
  ```sh
  $ docker compose run node index.js
  ```
