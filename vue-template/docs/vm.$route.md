## vm.$route object
```

router.html# /user/bar ?key=value&anotherKey=anotherValue#hashSegments
-----------  --------- ---------------------------------- ------------
   domain       path              queryString                 hash
              (route)

vm.$route.path => '/user/bar'
vm.$route.query => { anotherKey : "anotherValue", key : "value" }
vm.$route.hash => '#hashSegments'
vm.$route.params => { id: bar }
```

**在 `route component` 里可以访问到 `$route` object**
