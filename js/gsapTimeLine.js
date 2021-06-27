const tl = new TimelineMax()

tl.addLabel("startAnimation")
  .from(".navigation__unorderListElement", {y:"-20", duration: 1, ease:"Expo.easeOut", opacity: 0, stagger: 0.1,})
  .from(".navigation__envelopeIcon", {y:"-20", duration: 1, ease:"Expo.easeOut", opacity: 0, delay: "-0.8"})
  .from(".headingOneSpan", {y:"50", duration: 1, ease:"Expo.easeOut", opacity: 0, stagger: 0.1, delay: "-1"})
  .from(".subTitleSpan", {y:"20", duration: 1, ease:"Expo.easeOut", opacity: 0, stagger: 0.1, delay: "-0.8"})
  .from(".navigation__borderNavigation", {scaleX: 0, transformOrigin: "left", duration: 2}, "startAnimation")
  .from(".navigation__envelopeBoxBorder", {height: 0, transformOrigin: "left", duration: 1}, "startAnimation")
  .from(".navigation__menuBoxBorder", {height: 0, transformOrigin: "left", duration: 1}, "startAnimation")