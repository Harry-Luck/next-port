import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>
					<link
						rel="icon"
						type="image/png"
						href={require("../images/favicon.png")}
					></link>
					<meta name="author" content="Jio Buenviaje" />

					<meta property="twitter:title" content="Tembo AI" />

					<meta property="og:type" content="website" />
					<meta property="og:site_name" content="Tembo AI" />

					<meta property="og:title" content="Tembo AI" />
					<meta
						property="og:image"
						content="https://user-images.githubusercontent.com/50670255/77236103-9f951900-6b91-11ea-99b0-ca78041f0049.png"
					/>
					<meta
						property="og:description"
						content="At Tembo, we want to understand individual & crowd behavior, especially during crises & security threats, so that we can make spaces safer & easier to secure."
					/>
					<meta property="og:url" content="tembo.ai" />

					<meta property="twitter:url" content="tembo.ai" />
					<meta name="theme-color" content="#3e0f5e" />

					<meta
						name="description"
						content="At Tembo, we want to understand individual & crowd behavior, especially during crises & security threats, so that we can make spaces safer & easier to secure."
					/>
					<meta
						property="twitter:description"
						content="At Tembo, we want to understand individual & crowd behavior, especially during crises & security threats, so that we can make spaces safer & easier to secure."
					/>

					<meta
						name="keywords"
						content="tembo,ai,temboai,anand,shah,anandshah,anandkiranshah,dan,kervick,dankervick,notredame,nd,techentrepreneurship,tech,entrepreneurship,esteem,msesteem,ideacenter,idea,center,ndideacenter,mccloskey,mccloskeywinner,mccloskeynewventure,mccloskeyventure,mccloskeyventurecompetition,mcclockeynewventurecompetition,farshore,farshorepartner,harborlink,harborlinknetwork,harborlinkpartner,northwestern,chicago,illinois,garage,thegarage,ml,machinelearning,machine,learning,artificialintelligence,artificial,intelligence,stoneman,stonemandouglas,stonemandouglashighschool,london,londonbridge,londonterror,londonterrorattacks,website,southbend,indiana,university,react,javascript,node,flutter,dart,raspberrypi,rpi,raspi,jointheherd,theherd,herd,joinherd,contact"
					/>
					<meta
						property="twitter:image"
						content="https://user-images.githubusercontent.com/50670255/77236103-9f951900-6b91-11ea-99b0-ca78041f0049.png"
					/>
					<meta name="twitter:card" content="summary_large_image" />
					<link
						href="https://api.mapbox.com/mapbox-gl-js/v1.7.0/mapbox-gl.css"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
