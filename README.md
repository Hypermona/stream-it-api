# Installation Steps

node version >= 16

run `pnpm i`

## run Mongodb

```shell
chown -R mongodb:mongodb /var/lib/mongodb
chown mongodb:mongodb /tmp/mongodb-27017.sock
sudo systemctl status mongod
sudo systemctl daemon-reload //incase of error
sudo systemctl start mongod
```
