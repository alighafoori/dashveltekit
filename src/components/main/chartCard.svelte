<script lang="ts">
	import { Line } from 'svelte-chartjs';
	const data: any = {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
			{
				label: 'My First dataset',
				fill: true,
				lineTension: 0.3,
				backgroundColor: 'rgba(225, 204,230, .3)',
				borderColor: 'rgb(205, 130, 158)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgb(205, 130,1 58)',
				pointBackgroundColor: 'rgb(255, 255, 255)',
				pointBorderWidth: 10,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgb(0, 0, 0)',
				pointHoverBorderColor: 'rgba(220, 220, 220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [65, 59, 80, 81, 56, 55, 40]
			},
			{
				label: 'My Second dataset',
				fill: true,
				lineTension: 0.3,
				backgroundColor: 'rgba(184, 185, 210, .3)',
				borderColor: 'rgb(35, 26, 136)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgb(35, 26, 136)',
				pointBackgroundColor: 'rgb(255, 255, 255)',
				pointBorderWidth: 10,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgb(0, 0, 0)',
				pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [28, 48, 40, 19, 86, 27, 90]
			}
		]
	};

	import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale } from 'chart.js';

	ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);
</script>

<div class="flex items-center justify-center min-h-screen px-5 py-5 bg-gray-900 min-w-screen">
	<div class="w-full px-5 py-5 text-gray-500 bg-gray-800 rounded shadow-xl lg:w-1/2">
		<div class="flex flex-wrap items-end">
			<div class="flex-1">
				<h3 class="text-lg font-semibold leading-tight">Income</h3>
			</div>
			<div class="relative">
				<button class="h-6 text-xs hover:text-gray-300 focus:outline-none">
					<span></span><i class="ml-1 mdi mdi-chevron-down"></i>
				</button>
				<div class="absolute right-0 top-auto z-30 w-32 min-w-full mt-1 -mr-3 text-sm bg-gray-700 rounded shadow-lg" style="display: none;">
					<span class="absolute top-0 right-0 w-3 h-3 mr-3 -mt-1 transform rotate-45 bg-gray-700"></span>
					<div class="relative z-10 w-full py-1 bg-gray-700 rounded">
						<ul class="text-xs list-reset">
							<li class="px-4 py-2 transition-colors duration-100 cursor-pointer hover:bg-gray-600 hover:text-white">
								<span>123213</span>
							</li>
							<li class="px-4 py-2 transition-colors duration-100 cursor-pointer hover:bg-gray-600 hover:text-white">
								<span>123213</span>
							</li>
							<li class="px-4 py-2 transition-colors duration-100 cursor-pointer hover:bg-gray-600 hover:text-white">
								<span>123213</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-wrap items-end mb-5">
			<h4 class="inline-block mr-2 text-2xl font-semibold leading-tight text-white lg:text-3xl">0</h4>
			<span class="inline-block"><span>0</span> <span>0</span>%</span>
		</div>
		<div>
			<Line {data} options={{ responsive: true }} />
		</div>
	</div>
</div>
