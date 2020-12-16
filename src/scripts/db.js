// offline data
db.enablePersistence()
.catch(err =>{
  if(err.code == 'failed-precondition'){
    console.log('persistence failed => check if multiple pages are open at once');
  }else if(err.code == 'unimplemented')
  console.log('persistence is not available => check browser compatibility');
});

db.collection('activators').onSnapshot((snapshot) =>{
  // console.log('logging docChanges snapShot',snapshot.docChanges());
  snapshot.docChanges().forEach(change => {
    // console.log(change, change.doc.data());
    if (change.type === 'added') {
      renderActivators(change.doc.data(), change.doc.id);
    }
  });
})