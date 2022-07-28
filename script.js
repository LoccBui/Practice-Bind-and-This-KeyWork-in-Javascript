const $ = document.querySelector.bind(document)

const app = (() => {
    const cars = ['BMW']
    const list = $('.list-car')
    const submit = $('#submit')
    const input = $('#input')

    return {

        addCar(newCar){
            cars.push(newCar)
        },
        deleteCar(index){
            cars.splice(index, 1)
        },
        
        render() {
            const html = cars.map((car,index) => 
                `<li> ${car} <span class='delete' data-index="${index}"> &times </span>  </li> `
            )
            .join('')

            list.innerHTML = html
        },

        handleDelete(event) {
            const deleteBtn = event.target.closest('.delete')

            if(deleteBtn) {
                const indexCar = deleteBtn.dataset.index
                this.deleteCar(indexCar)
                this.render()
            }
            
        },

        

        init() {

            submit.onclick = () => {
                const newCar =  input.value
                this.addCar(newCar)

                this.render()

                input.value = ''
                input.focus()
            },
            //Bind to this(app), if not bind: this will be list(ul),
            list.onclick = this.handleDelete.bind(this)
            this.render()
        }
    }
})()
app.init()