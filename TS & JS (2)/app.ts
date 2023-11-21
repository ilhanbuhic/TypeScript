// -------------- Object types --------------

/*
    Object types are not great sometimes,
    because while it does prevent us from storing
    different types inside a variable, it does not
    give us any hints regarding the structure of the object
 */

    let user: object

    user = {
      name: 'Ilhan',
      age: 25,
      isAdmin: true,
      id: 'abc', // 123
    }
    user = {}
    /* 
        Because we annotated user as an object, it allows us to
        store different number of properties inside of an object,
        but it also allows us to redeclare an object wihtout any key, value pairs
        And in most situations that's not what we want
    
        In usual cases, we want to make sure that user must always be an object
        with exactly specific structure
    */
    
    // Instead of setting user like this --> let user: object
    // We can do this instead --> let user: {}
    // Now, inside of this user object, we can define everything that we want in specific
    /*
        let user = {
            name: string;
            age: number;
            isAdmin: boolean;
            id: string | number;
            // When defining a type, we should use ';', instead of a ','
            // When defining a value, we should use ',', instead of a ';'
        }
        With this, we are setting the user of the shape that we want
    
        Now if we try to redeclare this user to an empty object, we would get an error
        user = {} --> ERROR
        Because an empty object doesn't have the same shape as the one we declared above
    */
    
    // -------------- Object types --------------
    

    