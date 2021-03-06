module.exports = {
    /**
     * Return an object with a next() property. Each time the next function
     * is called the value returned is one higher than the time before.
     *
     *  let c = closures.counter(2);
     *  c.next(); // return 3
     *  c.next(); // return 4
     *  c.next(); // return 5
     */
    counter: function (start) {
        // Returning an object with a .next() property.
        return {
            next: function() {
                return ++start;
            },
        };
    },

    /**
     * Return an object with a discount() property. The discount property should
     * accept an amount that the original price should be discounted by. This
     * should not affect the original amount!
     *
     *  let tot = closures.total(20);
     *  tot.discount(0.50); // return 10
     *  tot.discount(0.20); // return 16
     */
    total: function (amount) {

        return {
            discount: function(num) {
                return amount - (num * amount);
            },
        }
    },

    /**
     * Set the name of a user. Only valid names can be provided. A `valid` name is
     * one that matches the regex ^[A-Za-z ]+$.
     *
     *  let user = closures.user();
     *  user.setName('Francis Bacon');  // return true
     *  user.getName();                 // return 'Francis Bacon'
     *  user.setName('123 hi');         // return false
     *  user.getName();                 // return 'Francis Bacon'
     */


    // this one fails, not sure why
    user: function () {
        name = [];
        let check = /^[A-Za-z ]+$/;
        return {
            setName: function (input) {
                if(check.test(input) === true) {
                name.push(input);
                return true;
                }
                return false;
            },

            getName: function () {
                if(check.test(name) === true) {
                    return name;
                } 
                },
        };
    },

    /**
     * Track the number of lives remaining in a game.
     *
     *  let lives = closures.lives(5);
     *  lives.died();
     *  console.log(lives.left()); // 4
     *  lives.died();
     *  console.log(lives.left()); // 3
     *  lives.restart();
     *  console.log(lives.left()); // 5
     */
    lives: function (start) {
        let current = start;
        return {
            died: function() {
                return current--;
            },
            left: function() {
                return current;
            },
            restart: function() {
                current = start;
            },
        };
        
    },

    /**
     * Create a logging object that adds a 'message id' before the message 
     * text. The message ID starts at one and increments with each record.
     *
     *  let logger = closures.messages();
     *  let msg = logger.record('first message');
     *  console.log(msg); // '[1] first message'
     *  msg = logger.record('second message');
     *  console.log(msg); // '[2] second message'
     */
    messages: function () {
        count = 0;
        return {
            record: function(input) {
                count++;
                return '[' + count + '] ' + input;
            },
        };
    },



    /**
     * Create a pocket object that can contain COINS and TRINKETS. The pocket
     * allows users to buy() trinkets for 10 coins, or sell() trinkets for 5
     * coins. You can also return the number of coins() or trinkets().
     *
     * You can't have a negative number of coins or trinkets.
     *
     *  let pocket = closures.pocket(50);
     *  pocket.buy(); // buy for 10 coins
     *  console.log(pocket.coins()); // 40
     *  console.log(pocket.trinkets()); // 1
     *
     *  pocket.buy();
     *  console.log(pocket.coins()); // 30
     *  console.log(pocket.trinkets()); // 2
     *
     *  pocket.sell();
     *  console.log(pocket.coins()); // 35
     *  console.log(pocket.trinkets()); // 1
     */
    pocket: function (start) {
        coin = start;
        trinkets = 0;

        return {
            buy: function() {
                if(coin > 9) {
                trinkets++;
                coin -= 10;
                };
            },

            sell: function() {
                if(trinkets > 0) {
                trinkets--;
                coin += 5;
                };
            },
            coins: function() {
                return coin;
            },
            trinkets: function() {
                return trinkets;
            },
        };
    },

    /**
     * Return a function that accepts the value to multiply `val` by.
     *
     *  multiply(3)(5); // return 15
     */

    // not really understanding this one
    multiply: function (val) {

        return {

        }
        
    },
};






// review
/**
 * 
 */