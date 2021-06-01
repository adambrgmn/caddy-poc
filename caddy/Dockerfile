FROM caddy:2.3.0-alpine
COPY ./ /usr/share/caddy
USER root
COPY ./Caddyfile /etc/caddy/

CMD ["caddy", "reverse-proxy", "--from", "$PORT", "--to", "https://caddy-poc-app-4qisupq5ea-lz.a.run.app"]
