export default function SliderNavigation({ next, prev }) {
  return (
    <>
      <button onClick={prev}>
        <svg
          width="54"
          height="14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.41 8.556c1.713.98 3.02 1.738 4.283 2.451.45.268.901.49 1.307.802.586.401 1.398.847.947 1.694-.451.802-1.308.445-1.939.223-.676-.179-1.352-.535-1.984-.847a527.021 527.021 0 0 1-8.746-4.234c-.767-.4-1.579-.757-2.255-1.292-1.443-1.07-1.352-2.14.226-2.941 2.119-1.07 4.283-2.05 6.447-3.03C8.598.935 9.545.49 10.491.177 11.032 0 11.664.045 12.25 0c.18 1.248-.541 1.515-1.172 1.827-1.579.847-3.202 1.649-4.78 2.496-.54.312-1.127.624-1.668 1.337.812.089 1.578.222 2.39.267l18.215.936c8.837.445 17.629.891 26.466 1.381.721.045 1.442.312 2.299.535-.812 1.203-1.758.936-2.525.891-4.328-.089-8.702-.267-13.03-.4l-27.999-.937c-.225.045-.36.09-1.037.223Z"
            fill="#000"
          />
        </svg>
      </button>
      <button onClick={next}>
        <svg
          width="54"
          height="14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="next-button"
        >
          <path
            d="M9.41 8.556c1.713.98 3.02 1.738 4.283 2.451.45.268.901.49 1.307.802.586.401 1.398.847.947 1.694-.451.802-1.308.445-1.939.223-.676-.179-1.352-.535-1.984-.847a527.021 527.021 0 0 1-8.746-4.234c-.767-.4-1.579-.757-2.255-1.292-1.443-1.07-1.352-2.14.226-2.941 2.119-1.07 4.283-2.05 6.447-3.03C8.598.935 9.545.49 10.491.177 11.032 0 11.664.045 12.25 0c.18 1.248-.541 1.515-1.172 1.827-1.579.847-3.202 1.649-4.78 2.496-.54.312-1.127.624-1.668 1.337.812.089 1.578.222 2.39.267l18.215.936c8.837.445 17.629.891 26.466 1.381.721.045 1.442.312 2.299.535-.812 1.203-1.758.936-2.525.891-4.328-.089-8.702-.267-13.03-.4l-27.999-.937c-.225.045-.36.09-1.037.223Z"
            fill="#000"
          />
        </svg>
      </button>
    </>
  );
}