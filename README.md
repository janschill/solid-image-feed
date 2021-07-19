# solid-image-feed

Manage your images and subscribe to feeds.

## Getting Started

```bash
npm ci
npm run dev
```

## MVP

* Authenticate with Solid pod
* Private feed (example.org/webidurl)
  * Only images of authorized agent
  * Allow management of ACLs in this feed
  * Show everyone public images, authorized images (has granted access)
* Subscriber feed (example.org/ when logged in)
  * Show all images the authorized agent has subscribed to and was granted permission
* Read and write to container

## Possible Features

* Comments on images
* Notifications of newly added images
