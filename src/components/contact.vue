<template id="Contact">

    <!-- Background Shapes -->
    <div class="shape shape1"></div>
    <div class="shape shape2"></div>
    <div class="shape shape3"></div>

    <v-container class="mt-10">

        <h2 class="contact-title">Let's Work Together</h2>
        <p class=" mb-8 text-grey-lighten-1 text-center text-h5">
            Have a project in mind or need a frontend developer?
            I’m ready to help you turn ideas into reality.
        </p><v-row justify="center " style="gap: 10px; ">

            <div class="link-item d-flex gap-1 align-center text-white mb-4 text-h5" style="gap: 15px;">

                <v-icon @click="openLink('https://www.linkedin.com/in/khaled-hassan-2820b4248')" class="social-icon"
                    title="Go to linkedin">
                    mdi-linkedin
                </v-icon>
                <v-icon @click="openLink('https://github.com/5aled1801')" class="social-icon" title="go to github">
                    mdi-github
                </v-icon>
                <v-icon class="social-icon" @click="openLink(`tel:+201284456019`)" title="call me">mdi-phone</v-icon>
                <v-icon class="social-icon" @click="openLink(`https://wa.me/201284456019`)"
                    title="chat me what's app">mdi-whatsapp</v-icon>
                <v-icon class="social-icon" @click="openLink(`mailto:khaled.h.almass@gmail.com`)"
                    title="Send email to me ">mdi-gmail</v-icon>

            </div>


        </v-row>
        <v-row justify="center">
            <v-col cols="12" md="6">

                <form @submit.prevent="sendEmail" class="contact-form">

                    <!-- Name -->
                    <div class="input-group">
                        <i class="fa-solid fa-user input-icon"></i>
                        <input type="text" v-model="form.name" id="name" name="name" />
                        <label for="name">Your Name</label>
                    </div>

                    <!-- Email -->
                    <div class="input-group">
                        <i class="fa-solid fa-envelope input-icon"></i>
                        <input type="email" v-model="form.email" id="email" name="email" />
                        <label for="email">Your Email</label>
                    </div>

                    <!-- Message -->
                    <div class="input-group textarea-group">
                        <i class="fa-solid fa-message input-icon"></i>
                        <textarea v-model="form.message" name="message" id="message"></textarea>
                        <label for="message">Your Message</label>
                    </div>
                    <v-row justify="center">

                        <!-- Button -->
                        <button type="submit" aria-label="submit" class="send-btn center-align">
                            Send Message
                        </button>
                    </v-row>

                </form>

            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <div class="text-center text-white">
                    <p>&copy; 2025 Khaled Hassan. All rights reserved.</p>
                </div>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'

export default {
    data() {
        return {
            form: {
                name: "",
                email: "",
                message: ""
            }
        }
    },
    methods: {
        openLink(url) {
            window.open(url, "_blank");
        },
        async sendEmail() {
            const params = {
                name: this.form.name,
                email: this.form.email,
                message: this.form.message
            };
            if (this.form.name == "" || this.form.email == "" || this.form.message == "") {
                Swal.fire({
                    title: `Please fill all data`,
                    icon: "warning",
                    confirmButtonText: "OK",
                    customClass: {
                        confirmButton: "my-confirm-btn",
                    },
                });
            } else {
                try {
                    await emailjs.send(
                        "service_1knd85o",
                        "template_o779c3a",
                        params,
                        "v8nsuu2UQjSZR2oU3"
                    );
                    Swal.fire({
                        title: "sent successfuly ",
                        icon: "success",
                        draggable: true,
                        confirmButtonText: "OK",
                        customClass: {
                            confirmButton: "my-confirm-btn",
                        },
                    });
                    this.form = { name: "", email: "", message: "" };
                } catch (err) {
                    console.error(err);
                    Swal.fire({
                        title: `Failed to send message.`,
                        icon: "error",
                        draggable: true, confirmButtonText: "OK",
                        customClass: {
                            confirmButton: "my-confirm-btn",
                        },
                    });
                }
            }
        }
    }
};
</script>
<style>
/* ======= CONTACT SECTION ======= */
.contact-section {
    width: 100%;
    padding: 100px 0;
    background: linear-gradient(135deg, #0d48a156, #1e88e55e);
    display: flex;
    justify-content: center;
    align-items: center;
}

.social-icon:hover {
    transition: 0.5s ease-in-out;
    color: rgb(112, 118, 126);
}

/* Title */
.contact-title {
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 40px;
    letter-spacing: 1px;
    text-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

/* ======= FORM CONTAINER ======= */
.contact-form {
    padding: 35px;
    border-radius: 18px;
    background: rgb(29 43 65 / 18%);
    backdrop-filter: blur(18px);
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.12);
}

/* Animation */


/* ======= INPUTS ======= */
.input-group {
    position: relative;
    margin-bottom: 28px;
}

.input-group input,
.input-group textarea {
    width: 100%;
    padding: 14px 12px;
    border: none;
    border-bottom: 2px solid #ddd;
    background: transparent;
    outline: none;
    color: #fff;
    font-size: 16px;
    transition: 0.3s;
    resize: none;
}

/* Textarea height */
.textarea-group textarea {
    height: 120px;
}

/* Floating labels */
.input-group label {
    position: absolute;
    left: 10px;
    top: 14px;
    color: #eee;
    pointer-events: none;
    transition: 0.3s ease;
}

/* When active or filled */
.input-group input:focus,
.input-group textarea:focus {
    border-color: #90caf9;
}

.input-group input:focus+label,
.input-group textarea:focus+label,
.input-group input:not(:placeholder-shown)+label,
.input-group textarea:not(:placeholder-shown)+label {
    top: -10px;
    font-size: 12px;
    color: #90caf9;
}

/* ======= SEND BUTTON ======= */
.send-btn {
    padding: 14px;
    font-size: 17px;
    border-radius: 12px;
    background: #fff !important;
    color: #0d47a1 !important;
    font-weight: bold;
    transition: 0.3s ease;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
}

.send-btn:hover {
    background: #e3f2fd !important;
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(255, 255, 255, 0.5);
}

.my-confirm-btn {
    background-color: #0024ffba !important;
    color: #fff !important;
    border-radius: 8px;
    padding: 10px 24px;
    font-weight: 600;
}
</style>