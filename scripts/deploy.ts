export function getServer(env = 'dev', kind = 'wcm') {
  let server = '';

  switch (env) {
    case 'prod':
      server = getProdServer(kind);
      break;
    case 'dev':
    default:
      server = getDevServer(kind);
      break;
  }

  return server;
}

function getProdServer(kind: string) {
  return 'prod-server';
}

function getDevServer(kind: string): string {
  let server = '';

  switch (kind) {
    case 'wcm':
    default:
      server = 'wcm-dev-server';
  }

  return server;
}
