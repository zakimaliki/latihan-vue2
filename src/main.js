var product = new Vue({
    el: '#product',
    data: {
        shoes: [
            {
                id: 1,
                name: "White sneakers",
                price: 500000,
                discount: 900000,
                img: "src/img/white.png",
                stock: 10
            },
            {
                id: 2,
                name: "Red sneakers",
                price: 3000000,
                discount: 5000000,
                img: "src/img/red.png",
                stock: 10
            },
            {
                id: 3,
                name: "Blue sneakers",
                price: 1500000,
                discount: 2000000,
                img: "src/img/blue.png",
                stock: 10
            },
            {
                id: 4,
                name: "Green sneakers",
                price: 2000000,
                discount: 3000000,
                img: "src/img/green.png",
                stock: 10
            }
        ],
        selectedShoe :{
            name: "",
            price: 0,
            discount: 0,
            img: "",
            stock: 0
        },
        qty : 0
    },
    methods: {
        openModal(id) {
            let filterShoe = this.shoes.find(shoe => shoe.id === id);
            this.selectedShoe = filterShoe;
            $('#exampleModal').modal('show');
        },
        closeModal() {
            $('#exampleModal').modal('hide');
        },
        qty_plus() {
            // alert("hello")
            if (this.qty < this.selectedShoe.stock) {
                this.qty ++
            }
        },
        qty_minus() {
            if (this.qty > 0) {
                this.qty -= 1
            }
        },
        buyNow() {
            window.location.href = "https://wa.me/6285311759600?text=Selamat%20datang%20ke%20Toko%20kami%20%0Aberikut%20detail%20pesanan%3A%0ANama%20pesanan%20%3A%20"+this.selectedShoe.name+"%0AHarga%20%3A%20"+this.selectedShoe.discount+"%0Ajumlah%20pesanan%20%3A%20"+this.qty+"%0AHarap%20lapor%20admin%20bila%20ada%20kesalahan%20dalam%20pemesanan%21"
        },
    },
})