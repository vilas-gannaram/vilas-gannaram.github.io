import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

// import PeerListSvg from '$lib/imgs/peerlist.svg';
// import PeerListDarkSvg from '$lib/imgs/peerlist-dark.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import TwitterSvg from '$lib/imgs/x.svg';
import TwitterDarkSvg from '$lib/imgs/x-dark.svg';

export const CONTACT = {
	email: 'vilasgannaram@gmail.com',
	tel: '+918106289825',
	social: {
		GitHub: {
			name: 'GitHub',
			url: 'https://github.com/vilas-gannaram',
			// // icon: Icons.github,
			icon: GithubSvg,
			navbar: true,
			dark_icon: GithubDarkSvg
		},
		LinkedIn: {
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/vilasgannaram/',
			// // icon: Icons.linkedin,
			icon: LinkedinSvg,
			navbar: true,
			dark_icon: LinkedinDarkSvg
		},
		X: {
			name: 'X',
			url: 'https://twitter.com/vilas_gannaram',
			// // icon: Icons.x,
			icon: TwitterSvg,
			navbar: true,
			dark_icon: TwitterDarkSvg
		},
		// PeerList: {
		// 	name: 'PeerList',
		// 	url: 'https://peerlist.io/vilasgannaram',
		// 	// // icon: Icons.x,
		// 	icon: PeerListSvg,
		// 	navbar: true,
		// 	dark_icon: PeerListDarkSvg
		// },
		// Youtube: {
		// 	name: 'Youtube',
		// 	url: 'https://github.com/vilasgannaram',
		// 	// // icon: Icons.youtube,
		// 	icon: Youtube,
		// 	navbar: true
		// }
		email: {
			name: 'Send Email',
			url: '#',
			// // icon: Icons.email,
			icon: GmailSvg,
			navbar: false,
			dark_icon: GmailDarkSvg
		}
	}
};
