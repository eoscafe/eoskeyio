// Layouts
import defaultLayout from 'layouts/default';

// Pages
import homepage from 'pages/homepage';
import generate from 'pages/generate';
import page404 from 'pages/404';

export default [
  {
    path: '/',
    component: defaultLayout,
    children: [
      { path: '', component: homepage },
      { path: 'generate', component: generate }
    ]
  },
  { // Always leave this as last one
    path: '*',
    component: page404
  }
]
