class Activity {
    constructor (activity, type, participants, price) {
        this.activity = activity,
        this.type = type,
        this.participants = participants,
        this.price = price 
    }
    set_activity(activity) {
        this.activity = activity
    }
    set_type(type) {
        this.type = type
    }
    set_participants(participants) {
        this.participants = participants
    }
    set_price(price) {
        this.price = price
    }

}
    fetch('https://www.boredapi.com/api/activity')
        .then(list => list.json())
        .then(data => {
        console.log(JSON.stringify(data));

    const activ = new Activity(data.activity, data.type, data.participants, data.price);
 
    const replyDiv = document.getElementById("reply");
    replyDiv.innerHTML = `
        <p>Activity: ${activ.activity}</p>
        <p>Type: ${activ.type}</p>
        <p>Participants: ${activ.participants}</p>
        <p>Price: ${activ.price}</p>
    `;
})

.catch(error => {
    console.error("An error occurred:", error);
});    
