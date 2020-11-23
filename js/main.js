const app = new Vue({
    el: '#app',
    data: {
        mails: [],
        counter: 0
    },
    created() {

        const self = this;

        while (self.counter < 10) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function (response) {
                self.mails.push(response.data.response)
            })
            .catch(function (error) {
                console.log(error);
            })

            self.counter++
        }
    }
});