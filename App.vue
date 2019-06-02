<template>

<h1>Hello World!</h1>

</template>

<script>
import db from './db'
export default{
db.collection("James Info").get()
  .then(querySnapshot => {
    const items = []
    querySnapshot.forEach((doc) => {
    const item =  doc.data();
    items.push(item);
  });
  console.log(items);
  this.items = items;
  });
}

</script>

<style>
@import url(https://bootswatch.com/4/darkly/bootstrap.min.css);
</style>
