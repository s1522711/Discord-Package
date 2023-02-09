import Upload from "../components/Upload";
import Head from "next/head";
import { SnackbarProvider } from "notistack";
export default function Home() {
  return (
    <>
      <Head>
        <title>Retardhub Discord Package Explorer!</title>
      </Head>
      <div className="h-screen">
        <SnackbarProvider>
          <Upload />
        </SnackbarProvider>
      </div>
    </>
  );
}
