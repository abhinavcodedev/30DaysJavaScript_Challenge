

// 4: Module pattern

//Task 6:  Use closures to create a simple module for managing a collection of items. 
            //Implement methods to add, remove, and list items.

            function modulePattern() {
                let items = [];
              
                function addItem(item) {
                  items.push(item);
                }
              
                function removeItem(item) {
                  const index = items.indexOf(item);
                  if (index > -1) {
                    items.splice(index, 1);
                  }
                }
              
                function listItem() {
                  return items.slice();
                }
              
                addItem("item 1");
                console.log(items);
              
                addItem("item 2");
                console.log(items);
              
                listItem();
                console.log(items);
              
                removeItem("item 1");
                console.log(items);
              }
              
              modulePattern();









              
            //   const itemModule = () =>{
            //     const items = []
            
            //     const addItem = (item)=>{
            //         items.push(item)
            //     }
            
            //     const removeItem = (item)=>{
            //         const index = items.indexOf(item)
            //         if(index > -1){
            //             items.splice(index,1)
            //         }
            //     }
            
            //     const listItems = () =>{
            //         console.log(items)
            //     }
            
            
            //     return {addItem,removeItem,listItems}
            //   }
            
            //   const firstModule = itemModule()
            
            //     firstModule.addItem('item 1')
            //     firstModule.addItem('item 2')
            //     firstModule.listItems()
            //     firstModule.removeItem('item 1')
            //     firstModule.listItems()