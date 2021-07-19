# Architecture

## Image Feed

* Subscribe to WebIDs to see their images in your feed
  * Subscribee can accept or decline
* Have your own feed with your images
  * Manage the ACLs to make them public, private, seen by followers

## Flow

1. Serve HTML with homepage
1. Check session
1. Render login page
1. Render feed
  1. Fetch solid-image-feed-container
  1. Somehow determine which resources to fetch
  1. Render resources

## Models

### Figure

Figure model is the in-code representation of a figure resource from a pod.

| field | type | vocab |
| - | - | - |
| createdAt | string | ? |
| imageUrl | string | ? |
| figcaption | string | ? |


### SolidModel

SolidModels holds all common interactions in the Solid ecosystem, such as, upstreaming a change in a resource to the pod or a RDF parser (?).
