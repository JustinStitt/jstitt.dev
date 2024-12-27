* configure compute instance ingress/egress rules to allow ports 80 (http) and
443 (https)

* configure firewall with `firewalld ($ sudo apt-get install firewalld`  and `$
sudo firewall-cmd --permanent --add-service=http` and `$ sudo firewall-cmd
--permanent --add-service=https`

* configure DNS A records (e.g.: if domain was example.dev):

```
Host | Type | Data
api  | A    | <public ip of compute instance>
```

* use Caddy

* make Caddyfile:

```
# basic setup
test.example.dev {
  respond "hello world"
}

# example reverse_proxy
api.example.dev {
  reverse_proxy 127.0.0.1:8080 # setup reverse proxy to local webserver
}
```

* modify caddy.service at `/lib/systemd/system/caddy.service` to use `root` user

* start caddy

`$ sudo systemctl enable --now caddy.service`

