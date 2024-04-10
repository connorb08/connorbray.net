import './style.css';

export default function () {
	return (
		<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
			<div className="SiteInfo">
				{/* Section 1 */}
				<section className="mt-16 text-gray-800 text-center lg:text-left">
					<div>
						<h2 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight">
							How is this site <br />
							<span className="text-orange-600">different?</span>
						</h2>
					</div>

					<div className="grid lg:grid-cols-2 gap-6 xl:gap-12 items-center pt-6 pb-6 xl:pt-12 xl:pb-12">
						<div className="infoSection">
							<p className="infoHeader text-orange-600">
								runs on the edge
							</p>
							<p className="infoText">
								It uses cloudflare's edge network to deliver
								content across the globe with exceptional
								performance, reliability, and scale.
								connorbray.net can be accessed within
								milliseconds from almost anywhere in the world.
							</p>
						</div>

						<div className="infoSection">
							<p className="infoHeader text-orange-600">
								security &amp; privacy
							</p>
							<p className="infoText">
								Strict, full end-to-end encryption is used,
								meaning all messages passed between the website
								and the client are encrypted the entire time.
								TLS v1.3 is enforced, which provides more
								security and speed.
							</p>
						</div>

						<div className="infoSection">
							<p className="infoHeader text-orange-600">green</p>
							<p className="infoText">
								connorbray.net is environment conscious. 100%
								powered by renewable energy with net zero
								emissions.
							</p>
						</div>

						<div className="infoSection">
							<p className="infoHeader text-orange-600">speed</p>
							<p className="infoText">
								connorbray.net is built for speed. It is
								rendered on both the client and server side to
								maximize performance.
							</p>
						</div>
					</div>
				</section>

				<hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

				{/* Section 2 */}
				<section className="mb-16 pt-6 text-gray-800 text-center lg:text-left">
					<div>
						<h2 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight">
							How does it <br />
							<span className="text-green-600">work?</span>
						</h2>
					</div>

					<div className="grid lg:grid-cols-2 gap-6 xl:gap-12 items-center pt-6 pb-6 xl:pt-12 xl:pb-12">
						<div className="infoSection">
							<p className="infoHeader text-green-600">
								serverless
							</p>
							<p className="infoText">
								Most websites have an "origin" server where the
								application is hosted. This website is hosted on
								cloudflare's world-wide distributed network.
								That means that it is able to recieve and
								process requests very quickly from anywhere in
								the world. This provides blazing fast speed and
								reliable load balancing.
							</p>
						</div>

						<div className="infoSection">
							<p className="infoHeader text-green-600">
								V8 Isolates
							</p>
							<p className="infoText">
								connorbray.net is being hosted on Cloudflare
								Workers, which provide a network of JavasScript
								V8 Isolates. Isolates have a lot of benefits
								than traditional Node.js processes. They are
								more secure, have much faster startup times,
								including 0ms cold starts, and use significantly
								less memory than Node.js instances. They don't
								have to use expensive containers or VMs.
							</p>
						</div>

						<div className="infoSection">
							<p className="infoHeader text-green-600">
								Dual Rendering
							</p>
							<p className="infoText">
								At its base, this site uses server side
								rendering &mdash; data is loaded in parallel on
								the server and sends a fully formed HTML
								document. This improves performance for users on
								a slow machine or with a poor network
								connection. This site also leverages client side
								rendering. Some components or site interactions
								are rendered by the client, depending on how
								flexible they need to be. Combining SSR and CSR
								takes the best of both worlds, which improve
								metrics such as TTFB, FCP, LCP, TTI, TBT, CLS.
							</p>
						</div>

						{/* <div className="infoSection">
                        <p className="infoHeader text-green-600">
                            Service Workers API
                        </p>
                        <p className="infoText">
                            Workers implement the Fetch API and are built on the
                            Service Workers API, which allows them to be very
                            flexible. Portable code. closly linked to http
                            protocols. Can be used to "grab" requests before
                            they get to the origin server. This site is served
                            from them though.
                        </p>
                    </div> */}
					</div>
				</section>
			</div>
		</div>
	);
}
