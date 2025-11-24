<template id="Contact">

    <!-- Background Shapes -->
    <div class="shape shape1"></div>
    <div class="shape shape2"></div>
    <div class="shape shape3"></div>

    <v-container class="mt-10">

        <h2 class="contact-title">Let's Work Together</h2>

        <v-row justify="center">
            <v-col cols="12" md="6">

                <form @submit.prevent="sendEmail" class="contact-form">

                    <!-- Name -->
                    <div class="input-group">
                        <i class="fa-solid fa-user input-icon"></i>
                        <input type="text" v-model="form.name" required />
                        <label>Your Name</label>
                    </div>

                    <!-- Email -->
                    <div class="input-group">
                        <i class="fa-solid fa-envelope input-icon"></i>
                        <input type="email" v-model="form.email" required />
                        <label>Your Email</label>
                    </div>

                    <!-- Message -->
                    <div class="input-group textarea-group">
                        <i class="fa-solid fa-message input-icon"></i>
                        <textarea v-model="form.message" required></textarea>
                        <label>Your Message</label>
                    </div>
                    <v-row justify="center">

                        <!-- Button -->
                        <button type="submit" class="send-btn center-align">
                            Send Message
                        </button>
                    </v-row>

                </form>

            </v-col>
        </v-row>
        <v-row justify="center " style="gap: 50px;">

            <div class="link-item d-flex gap-1 align-center text-white mb-4 text-h5" style="gap: 15px;">

                <v-icon @click="openLink('https://www.linkedin.com/in/khaled-hassan-2820b4248')" class="social-icon">
                    mdi-linkedin
                </v-icon>
                <v-icon @click="openLink('https://github.com/5aled1801')" class="social-icon">
                    mdi-github
                </v-icon>



            </div>
            <div class="link-item d-flex gap-1 align-center text-white mb-4 text-h5">
                <v-icon>mdi-phone</v-icon>
                <h1 class="text-h5">+201284456019</h1>
            </div>



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
                from_name: this.form.name,
                from_email: this.form.email,
                message: this.form.message
            };

            try {
                await emailjs.send(
                    "service_1knd85o",
                    "template_o779c3a",
                    params,
                    "v8nsuu2UQjSZR2oU3"
                );
                alert("Message sent successfully!");
                this.form = { name: "", email: "", message: "" };
            } catch (err) {
                console.error(err);
                alert("Failed to send message.");
            }
        }
    }
};
</script>
<style scoped>
/* ======= CONTACT SECTION ======= */
.contact-section {
    width: 100%;
    padding: 100px 0;
    background: linear-gradient(135deg, #0d48a156, #1e88e55e);
    display: flex;
    justify-content: center;
    align-items: center;
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
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(18px);
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.12);
    animation: fadeInUp 1s ease;
}

/* Animation */
@keyframes fadeInUp {
    from {
        transform: translateY(40px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

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
</style>