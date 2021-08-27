# solid-image-feed

## tl;dr

Render images from your pod and share them with others.

## Longer Version

Point the application to any container in your pod and it renders them on the page. Manage the protection on those images to allow the sharing with other users. You can also subscribe to other users and have their public and protected images in a feed.

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

* Comments on images ([solid-comment](https://github.com/janschill/solid-comment))
  * the auth module would need to extracted
  * storing comment references in a RDF file added
* Notifications of newly added images ([solid-inbox](https://github.com/solid/solid-inbox)?)
* Likes?
* Bookmarks?
* Searching public images? How to build an index?
