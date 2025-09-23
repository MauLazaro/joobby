import { Button, Form, Input, Textarea } from "@heroui/react";
import { IconMailFilled } from "@tabler/icons-react";
import ContactImage from "@assets/contact.svg";

const contact = () => {
    return (
        <div className="extra-space sec-space">
            <section className="flex items-center obj-width sec-space max-[699px]:flex-col max-[699px]:items-start">
                <div className="w-1/2 max-[699px]:w-full">
                    <h2>Get in touch</h2>
                    <p>Your feedback and inquiries are always welcome</p>
                    <img className="w-full h-full object-cover max-[699px]:w-[70%] max-[699px]:h-auto" src={ContactImage} alt="Get in touch" />
                </div>
                
                <div className="w-[500px] max-[699px]:w-full">
                    {/* //INFO: Por ahora, este form no cuenta con funcionalidad */}
                    <Form onSubmit={(e) => {
                        e.preventDefault();
                    }}>
                        <Input
                            isRequired
                            classNames={{
                                base: "w-full mt-2 mx-0 mb-4",
                                inputWrapper: "border-2 border-solid border-[--main-color] group-data-[hover=true]:border-teal-600 group-data-[focus=true]:border-teal-700 group-data-[focus-within=true]:border-teal-700",
                                input: "px-3 py-2 text-base"
                            }}
                            variant="bordered"
                            radius="sm"
                            size="lg"
                            autoComplete="off"
                            type="text"
                            errorMessage="Please enter a valid name"
                            label="Name"
                            labelPlacement="outside"
                            name="name"
                            placeholder="Enter your name"
                        />
                        
                        <Input
                            isRequired
                            isClearable
                            classNames={{
                                base: "w-full mt-2 mx-0 mb-4",
                                inputWrapper: "border-2 border-solid border-[--main-color] group-data-[hover=true]:border-teal-600 group-data-[focus=true]:border-teal-700 group-data-[focus-within=true]:border-teal-700",
                                input: "px-3 py-2 text-base",
                            }}
                            variant="bordered"
                            radius="sm"
                            size="lg"
                            autoComplete="off"
                            type="email"
                            errorMessage="Please enter a valid email"
                            label="Email"
                            labelPlacement="outside"
                            name="email"
                            placeholder="Enter your email"
                            startContent={
                                <IconMailFilled className="text-2xl text-teal-600 pointer-events-none shrink-0 group-data-[invalid=true]:text-danger" />
                            }
                        />
                        
                        <Textarea
                            isRequired
                            isClearable
                            classNames={{
                                base: "w-full mt-2 mx-0 mb-4",
                                inputWrapper: "border-2 border-solid border-[--main-color] group-data-[hover=true]:border-teal-600 group-data-[focus=true]:border-teal-700 group-data-[focus-within=true]:border-teal-700",
                                input: "px-3 py-2 text-base",
                            }}
                            variant="bordered"
                            radius="sm"
                            size="lg"
                            autoComplete="off"
                            minRows={5}
                            label="Message"
                            labelPlacement="outside"
                            name="message"
                            placeholder="Enter your message"
                            errorMessage="Please enter a message"
                        />
                        
                        <Button className="c-btn w-full" size="lg" type="submit">Submit</Button>
                    </Form>
                </div>
            </section>
            
            <section className="flex items-center obj-width sec-space max-[699px]:flex-col max-[699px]:items-start">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124858.64495781073!2d-77.19288405480958!3d-12.055032523971766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8db1e539667%3A0x4f45538aa07bda29!2sLima!5e0!3m2!1ses!2spe!4v1753304776089!5m2!1ses!2spe"
                    width="100%"
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>
        </div>
    );
};

export default contact;
