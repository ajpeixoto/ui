const tokens = {
	coralColorNeutralText: 'var(--coral-color-neutral-text, hsla(0,0%,13%,1))',
	coralColorNeutralTextWeak: 'var(--coral-color-neutral-text-weak, hsla(0,0%,38%,1))',
	coralColorNeutralTextDisabled: 'var(--coral-color-neutral-text-disabled, hsla(0,0%,44%,1))',
	coralColorNeutralTextInverted: 'var(--coral-color-neutral-text-inverted, hsla(0,0%,100%,1))',
	coralColorNeutralBackground: 'var(--coral-color-neutral-background, hsla(0,0%,100%,1))',
	coralColorNeutralBackgroundMedium:
		'var(--coral-color-neutral-background-medium, hsla(0,0%,97%,1))',
	coralColorNeutralBackgroundStrong:
		'var(--coral-color-neutral-background-strong, hsla(0,0%,88%,1))',
	coralColorNeutralBackgroundDisabled:
		'var(--coral-color-neutral-background-disabled, hsla(0,0%,88%,1))',
	coralColorNeutralBorder: 'var(--coral-color-neutral-border, hsla(0,0%,55%,1))',
	coralColorNeutralBorderWeak: 'var(--coral-color-neutral-border-weak, hsla(0,0%,82%,1))',
	coralColorNeutralBorderHover: 'var(--coral-color-neutral-border-hover, hsla(0,0%,40%,1))',
	coralColorAccentTextWeak: 'var(--coral-color-accent-text-weak, hsla(0,0%,100%,1))',
	coralColorAccentTextWeakHover: 'var(--coral-color-accent-text-weak-hover, hsla(204,59%,88%,1))',
	coralColorAccentTextWeakActive: 'var(--coral-color-accent-text-weak-active, hsla(205,60%,75%,1))',
	coralColorAccentText: 'var(--coral-color-accent-text, hsla(204,95%,31%,1))',
	coralColorAccentTextHover: 'var(--coral-color-accent-text-hover, hsla(204,96%,18%,1))',
	coralColorAccentTextActive: 'var(--coral-color-accent-text-active, hsla(205,94%,13%,1))',
	coralColorAccentBackground: 'var(--coral-color-accent-background, hsla(204,59%,88%,1))',
	coralColorAccentBackgroundHover:
		'var(--coral-color-accent-background-hover, hsla(205,60%,75%,1))',
	coralColorAccentBackgroundActive:
		'var(--coral-color-accent-background-active, hsla(204,60%,63%,1))',
	coralColorAccentBackgroundWeak: 'var(--coral-color-accent-background-weak, hsla(0,0%,100%,1))',
	coralColorAccentBackgroundWeakHover:
		'var(--coral-color-accent-background-weak-hover, hsla(204,59%,88%,1))',
	coralColorAccentBackgroundWeakActive:
		'var(--coral-color-accent-background-weak-active, hsla(205,60%,75%,1))',
	coralColorAccentBackgroundStrong:
		'var(--coral-color-accent-background-strong, hsla(204,95%,31%,1))',
	coralColorAccentBackgroundStrongHover:
		'var(--coral-color-accent-background-strong-hover, hsla(204,95%,23%,1))',
	coralColorAccentBackgroundStrongActive:
		'var(--coral-color-accent-background-strong-active, hsla(205,95%,15%,1))',
	coralColorAccentBorderHover: 'var(--coral-color-accent-border-hover, hsla(204,95%,23%,1))',
	coralColorAccentBorderActive: 'var(--coral-color-accent-border-active, hsla(205,95%,15%,1))',
	coralColorDangerTextWeak: 'var(--coral-color-danger-text-weak, hsla(0,0%,100%,1))',
	coralColorDangerTextWeakHover: 'var(--coral-color-danger-text-weak-hover, hsla(358,100%,94%,1))',
	coralColorDangerTextWeakActive:
		'var(--coral-color-danger-text-weak-active, hsla(359,100%,88%,1))',
	coralColorDangerText: 'var(--coral-color-danger-text, hsla(359,51%,53%,1))',
	coralColorDangerTextHover: 'var(--coral-color-danger-text-hover, hsla(359,52%,43%,1))',
	coralColorDangerTextActive: 'var(--coral-color-danger-text-active, hsla(359,51%,33%,1))',
	coralColorDangerBackground: 'var(--coral-color-danger-background, hsla(0,100%,96%,1))',
	coralColorDangerBackgroundHover:
		'var(--coral-color-danger-background-hover, hsla(359,100%,88%,1))',
	coralColorDangerBackgroundActive:
		'var(--coral-color-danger-background-active, hsla(359,100%,83%,1))',
	coralColorDangerBackgroundWeak: 'var(--coral-color-danger-background-weak, hsla(0,0%,100%,1))',
	coralColorDangerBackgroundWeakHover:
		'var(--coral-color-danger-background-weak-hover, hsla(358,100%,94%,1))',
	coralColorDangerBackgroundWeakActive:
		'var(--coral-color-danger-background-weak-active, hsla(359,100%,88%,1))',
	coralColorSuccessTextWeak: 'var(--coral-color-success-text-weak, hsla(0,0%,100%,1))',
	coralColorSuccessTextWeakHover: 'var(--coral-color-success-text-weak-hover, hsla(110,49%,90%,1))',
	coralColorSuccessTextWeakActive:
		'var(--coral-color-success-text-weak-active, hsla(110,48%,85%,1))',
	coralColorSuccessText: 'var(--coral-color-success-text, hsla(111,49%,34%,1))',
	coralColorSuccessTextHover: 'var(--coral-color-success-text-hover, hsla(111,49%,29%,1))',
	coralColorSuccessTextActive: 'var(--coral-color-success-text-active, hsla(111,49%,24%,1))',
	coralColorSuccessBackground: 'var(--coral-color-success-background, hsla(110,49%,90%,1))',
	coralColorDangerBackgroundStrong:
		'var(--coral-color-danger-background-strong, hsla(359,51%,53%,1))',
	coralColorDangerBackgroundStrongHover:
		'var(--coral-color-danger-background-strong-hover, hsla(359,54%,38%,1))',
	coralColorDangerBackgroundStrongActive:
		'var(--coral-color-danger-background-strong-active, hsla(359,54%,33%,1))',
	coralColorDangerBorder: 'var(--coral-color-danger-border, hsla(359,51%,53%,1))',
	coralColorSuccessBackgroundHover:
		'var(--coral-color-success-background-hover, hsla(110,48%,85%,1))',
	coralColorDangerBorderHover: 'var(--coral-color-danger-border-hover, hsla(359,54%,38%,1))',
	coralColorSuccessBackgroundActive:
		'var(--coral-color-success-background-active, hsla(110,49%,80%,1))',
	coralColorDangerBorderActive: 'var(--coral-color-danger-border-active, hsla(359,54%,33%,1))',
	coralColorSuccessBackgroundWeak: 'var(--coral-color-success-background-weak, hsla(0,0%,100%,1))',
	coralColorSuccessBackgroundWeakHover:
		'var(--coral-color-success-background-weak-hover, hsla(110,49%,90%,1))',
	coralColorSuccessBackgroundWeakActive:
		'var(--coral-color-success-background-weak-active, hsla(110,48%,85%,1))',
	coralColorSuccessBackgroundStrong:
		'var(--coral-color-success-background-strong, hsla(111,49%,34%,1))',
	coralColorSuccessBackgroundStrongHover:
		'var(--coral-color-success-background-strong-hover, hsla(111,49%,29%,1))',
	coralColorSuccessBackgroundStrongActive:
		'var(--coral-color-success-background-strong-active, hsla(111,49%,24%,1))',
	coralColorWarningTextWeak: 'var(--coral-color-warning-text-weak, hsla(0,0%,100%,1))',
	coralColorWarningTextWeakHover: 'var(--coral-color-warning-text-weak-hover, hsla(22,85%,92%,1))',
	coralColorWarningTextWeakActive:
		'var(--coral-color-warning-text-weak-active, hsla(22,85%,82%,1))',
	coralColorSuccessBorder: 'var(--coral-color-success-border, hsla(111,49%,34%,1))',
	coralColorWarningText: 'var(--coral-color-warning-text, hsla(22,93%,41%,1))',
	coralColorWarningTextHover: 'var(--coral-color-warning-text-hover, hsla(21,94%,31%,1))',
	coralColorWarningTextActive: 'var(--coral-color-warning-text-active, hsla(21,93%,21%,1))',
	coralColorWarningBackground: 'var(--coral-color-warning-background, hsla(22,85%,92%,1))',
	coralColorSuccessBorderHover: 'var(--coral-color-success-border-hover, hsla(111,49%,29%,1))',
	coralColorWarningBackgroundHover:
		'var(--coral-color-warning-background-hover, hsla(22,85%,82%,1))',
	coralColorSuccessBorderActive: 'var(--coral-color-success-border-active, hsla(111,49%,24%,1))',
	coralColorWarningBackgroundActive:
		'var(--coral-color-warning-background-active, hsla(22,85%,72%,1))',
	coralColorWarningBackgroundWeak: 'var(--coral-color-warning-background-weak, hsla(0,0%,100%,1))',
	coralColorAssistiveText: 'var(--coral-color-assistive-text, hsla(0,0%,100%,1))',
	coralColorWarningBackgroundWeakHover:
		'var(--coral-color-warning-background-weak-hover, hsla(22,85%,92%,1))',
	coralColorWarningBackgroundWeakActive:
		'var(--coral-color-warning-background-weak-active, hsla(22,85%,82%,1))',
	coralColorAssistiveBackground: 'var(--coral-color-assistive-background, hsla(210,62%,5%,1))',
	coralColorWarningBackgroundStrong:
		'var(--coral-color-warning-background-strong, hsla(22,93%,41%,1))',
	coralColorWarningBackgroundStrongHover:
		'var(--coral-color-warning-background-strong-hover, hsla(21,94%,31%,1))',
	coralColorWarningBackgroundStrongActive:
		'var(--coral-color-warning-background-strong-active, hsla(21,93%,21%,1))',
	coralColorWarningBorder: 'var(--coral-color-warning-border, hsla(22,93%,41%,1))',
	coralColorAssistiveBorder: 'var(--coral-color-assistive-border, hsla(0,0%,47%,1))',
	coralColorWarningBorderHover: 'var(--coral-color-warning-border-hover, hsla(21,94%,31%,1))',
	coralColorWarningBorderActive: 'var(--coral-color-warning-border-active, hsla(21,93%,21%,1))',
	coralColorBrandingBrand: 'var(--coral-color-branding-brand, hsla(359,100%,71%,1))',
	coralColorNeutralBorderDisabled: 'var(--coral-color-neutral-border-disabled, hsla(0,0%,65%,1))',
	coralColorNeutralBorderWeakHover:
		'var(--coral-color-neutral-border-weak-hover, hsla(0,0%,72%,1))',
	coralColorAssistiveBorderFocus: 'var(--coral-color-assistive-border-focus, hsla(241,54%,61%,1))',
	coralColorAccentTextStrong: 'var(--coral-color-accent-text-strong, hsla(204,96%,18%,1))',
	coralColorAccentTextStrongHover:
		'var(--coral-color-accent-text-strong-hover, hsla(204,97%,13%,1))',
	coralColorAccentTextStrongActive:
		'var(--coral-color-accent-text-strong-active, hsla(205,95%,8%,1))',
	coralColorDangerTextStrong: 'var(--coral-color-danger-text-strong, hsla(359,47%,44%,1))',
	coralColorDangerTextStrongHover:
		'var(--coral-color-danger-text-strong-hover, hsla(359,54%,38%,1))',
	coralColorDangerTextStrongActive:
		'var(--coral-color-danger-text-strong-active, hsla(359,54%,33%,1))',
	coralColorSuccessTextStrong: 'var(--coral-color-success-text-strong, hsla(111,49%,29%,1))',
	coralColorSuccessTextStrongHover:
		'var(--coral-color-success-text-strong-hover, hsla(110,49%,24%,1))',
	coralColorSuccessTextStrongActive:
		'var(--coral-color-success-text-strong-active, hsla(111,48%,19%,1))',
	coralColorWarningTextStrong: 'var(--coral-color-warning-text-strong, hsla(22,86%,27%,1))',
	coralColorWarningTextStrongHover:
		'var(--coral-color-warning-text-strong-hover, hsla(23,86%,22%,1))',
	coralColorWarningTextStrongActive:
		'var(--coral-color-warning-text-strong-active, hsla(23,86%,17%,1))',
	coralColorBetaText: 'var(--coral-color-beta-text, hsla(280,57%,49%,1))',
	coralColorBetaTextHover: 'var(--coral-color-beta-text-hover, hsla(281,58%,39%,1))',
	coralColorBetaTextActive: 'var(--coral-color-beta-text-active, hsla(281,58%,29%,1))',
	coralColorBetaIcon: 'var(--coral-color-beta-icon, hsla(280,80%,54%,1))',
	coralColorBetaIconHover: 'var(--coral-color-beta-icon-hover, hsla(280,80%,44%,1))',
	coralColorBetaIconActive: 'var(--coral-color-beta-icon-active, hsla(280,80%,34%,1))',
	coralColorBetaTextWeak: 'var(--coral-color-beta-text-weak, hsla(0,0%,100%,1))',
	coralColorBetaTextWeakHover: 'var(--coral-color-beta-text-weak-hover, hsla(280,56%,83%,1))',
	coralColorBetaTextWeakActive: 'var(--coral-color-beta-text-weak-active, hsla(280,57%,73%,1))',
	coralColorBetaTextStrong: 'var(--coral-color-beta-text-strong, hsla(281,58%,29%,1))',
	coralColorBetaTextStrongHover: 'var(--coral-color-beta-text-strong-hover, hsla(282,58%,19%,1))',
	coralColorBetaTextStrongActive: 'var(--coral-color-beta-text-strong-active, hsla(282,57%,9%,1))',
	coralColorBetaBackground: 'var(--coral-color-beta-background, hsla(279,57%,90%,1))',
	coralColorBetaBackgroundHover: 'var(--coral-color-beta-background-hover, hsla(279,57%,81%,1))',
	coralColorBetaBackgroundActive: 'var(--coral-color-beta-background-active, hsla(279,57%,71%,1))',
	coralColorBetaBackgroundWeak: 'var(--coral-color-beta-background-weak, hsla(0,0%,100%,1))',
	coralColorBetaBackgroundWeakHover:
		'var(--coral-color-beta-background-weak-hover, hsla(279,57%,90%,1))',
	coralColorBetaBackgroundWeakActive:
		'var(--coral-color-beta-background-weak-active, hsla(279,57%,80%,1))',
	coralColorBetaBackgroundStrong: 'var(--coral-color-beta-background-strong, hsla(281,58%,29%,1))',
	coralColorBetaBackgroundStrongHover:
		'var(--coral-color-beta-background-strong-hover, hsla(282,58%,19%,1))',
	coralColorBetaBackgroundStrongActive:
		'var(--coral-color-beta-background-strong-active, hsla(282,57%,9%,1))',
	coralColorBetaBorder: 'var(--coral-color-beta-border, hsla(281,58%,29%,1))',
	coralColorBetaBorderHover: 'var(--coral-color-beta-border-hover, hsla(282,58%,19%,1))',
	coralColorBetaBorderActive: 'var(--coral-color-beta-border-active, hsla(282,57%,9%,1))',
	coralColorNeutralBorderStrong: 'var(--coral-color-neutral-border-strong, hsla(0,0%,25%,1))',
	coralColorNeutralBorderStrongHover:
		'var(--coral-color-neutral-border-strong-hover, hsla(0,0%,15%,1))',
	coralColorNeutralIconInverted: 'var(--coral-color-neutral-icon-inverted, hsla(0,0%,100%,1))',
	coralColorNeutralIcon: 'var(--coral-color-neutral-icon, hsla(0,0%,13%,1))',
	coralColorNeutralIconWeak: 'var(--coral-color-neutral-icon-weak, hsla(0,0%,38%,1))',
	coralColorAccentIcon: 'var(--coral-color-accent-icon, hsla(204,88%,40%,1))',
	coralColorAccentIconHover: 'var(--coral-color-accent-icon-hover, hsla(204,88%,30%,1))',
	coralColorAccentIconActive: 'var(--coral-color-accent-icon-active, hsla(205,88%,20%,1))',
	coralColorDangerIcon: 'var(--coral-color-danger-icon, hsla(359,69%,53%,1))',
	coralColorDangerIconHover: 'var(--coral-color-danger-icon-hover, hsla(359,69%,43%,1))',
	coralColorDangerIconActive: 'var(--coral-color-danger-icon-active, hsla(359,69%,33%,1))',
	coralColorSuccessIcon: 'var(--coral-color-success-icon, hsla(111,53%,40%,1))',
	coralColorSuccessIconHover: 'var(--coral-color-success-icon-hover, hsla(111,53%,30%,1))',
	coralColorSuccessIconActive: 'var(--coral-color-success-icon-active, hsla(111,53%,20%,1))',
	coralColorWarningIcon: 'var(--coral-color-warning-icon, hsla(22,87%,47%,1))',
	coralColorWarningIconHover: 'var(--coral-color-warning-icon-hover, hsla(22,87%,37%,1))',
	coralColorWarningIconActive: 'var(--coral-color-warning-icon-active, hsla(22,87%,27%,1))',
	coralColorChartsNeutral: 'var(--coral-color-charts-neutral, hsla(0,0%,22%,1))',
	coralColorChartsNeutralWeak: 'var(--coral-color-charts-neutral-weak, hsla(0,0%,83%,1))',
	coralColorChartsNeutralStrong: 'var(--coral-color-charts-neutral-strong, hsla(0,0%,12%,1))',
	coralColorChartsNeutralHover: 'var(--coral-color-charts-neutral-hover, hsla(0,0%,12%,1))',
	coralColorChartsSuccess: 'var(--coral-color-charts-success, hsla(148,87%,40%,1))',
	coralColorChartsSuccessWeak: 'var(--coral-color-charts-success-weak, hsla(130,52%,91%,1))',
	coralColorChartsSuccessStrong: 'var(--coral-color-charts-success-strong, hsla(139,50%,22%,1))',
	coralColorChartsSuccessHover: 'var(--coral-color-charts-success-hover, hsla(139,50%,22%,1))',
	coralColorChartsDanger: 'var(--coral-color-charts-danger, hsla(4,89%,49%,1))',
	coralColorChartsDangerWeak: 'var(--coral-color-charts-danger-weak, hsla(359,69%,73%,1))',
	coralColorChartsDangerStrong: 'var(--coral-color-charts-danger-strong, hsla(359,62%,43%,1))',
	coralColorChartsDangerHover: 'var(--coral-color-charts-danger-hover, hsla(359,62%,43%,1))',
	coralColorChartsWarning: 'var(--coral-color-charts-warning, hsla(32,100%,56%,1))',
	coralColorChartsWarningWeak: 'var(--coral-color-charts-warning-weak, hsla(22,88%,84%,1))',
	coralColorChartsWarningStrong: 'var(--coral-color-charts-warning-strong, hsla(22,75%,42%,1))',
	coralColorChartsWarningHover: 'var(--coral-color-charts-warning-hover, hsla(22,75%,42%,1))',
	coralColorChartsDefault: 'var(--coral-color-charts-default, hsla(216,82%,48%,1))',
	coralColorChartsDefaultWeak: 'var(--coral-color-charts-default-weak, hsla(204,59%,73%,1))',
	coralColorChartsDefaultStrong: 'var(--coral-color-charts-default-strong, hsla(204,92%,29%,1))',
	coralColorChartsDefaultHover: 'var(--coral-color-charts-default-hover, hsla(204,92%,29%,1))',
	coralColorChartsColor00: 'var(--coral-color-charts-color-00, hsla(48,100%,50%,1))',
	coralColorChartsColor00Weak: 'var(--coral-color-charts-color-00-weak, hsla(51,91%,82%,1))',
	coralColorChartsColor00Strong: 'var(--coral-color-charts-color-00-strong, hsla(48,82%,45%,1))',
	coralColorChartsColor00Hover: 'var(--coral-color-charts-color-00-hover, hsla(48,82%,45%,1))',
	coralColorChartsColor01: 'var(--coral-color-charts-color-01, hsla(216,82%,48%,1))',
	coralColorChartsColor01Weak: 'var(--coral-color-charts-color-01-weak, hsla(204,59%,73%,1))',
	coralColorChartsColor01Strong: 'var(--coral-color-charts-color-01-strong, hsla(204,92%,29%,1))',
	coralColorChartsColor01Hover: 'var(--coral-color-charts-color-01-hover, hsla(204,92%,29%,1))',
	coralColorChartsColor02: 'var(--coral-color-charts-color-02, hsla(194,92%,50%,1))',
	coralColorChartsColor02Weak: 'var(--coral-color-charts-color-02-weak, hsla(194,91%,91%,1))',
	coralColorChartsColor02Strong: 'var(--coral-color-charts-color-02-strong, hsla(194,93%,32%,1))',
	coralColorChartsColor02Hover: 'var(--coral-color-charts-color-02-hover, hsla(194,93%,32%,1))',
	coralColorChartsColor03: 'var(--coral-color-charts-color-03, hsla(140,39%,79%,1))',
	coralColorChartsColor03Weak: 'var(--coral-color-charts-color-03-weak, hsla(138,40%,92%,1))',
	coralColorChartsColor03Strong: 'var(--coral-color-charts-color-03-strong, hsla(139,11%,35%,1))',
	coralColorChartsColor03Hover: 'var(--coral-color-charts-color-03-hover, hsla(139,11%,35%,1))',
	coralColorChartsColor04: 'var(--coral-color-charts-color-04, hsla(148,87%,40%,1))',
	coralColorChartsColor04Weak: 'var(--coral-color-charts-color-04-weak, hsla(130,52%,91%,1))',
	coralColorChartsColor04Strong: 'var(--coral-color-charts-color-04-strong, hsla(139,50%,22%,1))',
	coralColorChartsColor04Hover: 'var(--coral-color-charts-color-04-hover, hsla(139,50%,22%,1))',
	coralColorChartsColor05: 'var(--coral-color-charts-color-05, hsla(324,68%,71%,1))',
	coralColorChartsColor05Weak: 'var(--coral-color-charts-color-05-weak, hsla(323,69%,95%,1))',
	coralColorChartsColor05Strong: 'var(--coral-color-charts-color-05-strong, hsla(324,28%,49%,1))',
	coralColorChartsColor05Hover: 'var(--coral-color-charts-color-05-hover, hsla(324,28%,49%,1))',
	coralColorChartsColor06: 'var(--coral-color-charts-color-06, hsla(280,75%,58%,1))',
	coralColorChartsColor06Weak: 'var(--coral-color-charts-color-06-weak, hsla(279,77%,88%,1))',
	coralColorChartsColor06Strong: 'var(--coral-color-charts-color-06-strong, hsla(280,54%,36%,1))',
	coralColorChartsColor06Hover: 'var(--coral-color-charts-color-06-hover, hsla(280,54%,36%,1))',
	coralColorChartsColor07: 'var(--coral-color-charts-color-07, hsla(4,89%,49%,1))',
	coralColorChartsColor07Weak: 'var(--coral-color-charts-color-07-weak, hsla(359,69%,73%,1))',
	coralColorChartsColor07Strong: 'var(--coral-color-charts-color-07-strong, hsla(359,62%,43%,1))',
	coralColorChartsColor07Hover: 'var(--coral-color-charts-color-07-hover, hsla(359,62%,43%,1))',
	coralColorChartsColor08: 'var(--coral-color-charts-color-08, hsla(22,88%,54%,1))',
	coralColorChartsColor08Weak: 'var(--coral-color-charts-color-08-weak, hsla(22,88%,84%,1))',
	coralColorChartsColor08Strong: 'var(--coral-color-charts-color-08-strong, hsla(22,75%,42%,1))',
	coralColorChartsColor08Hover: 'var(--coral-color-charts-color-08-hover, hsla(22,75%,42%,1))',
	coralColorChartsColor09: 'var(--coral-color-charts-color-09, hsla(34,34%,45%,1))',
	coralColorChartsColor09Weak: 'var(--coral-color-charts-color-09-weak, hsla(35,28%,82%,1))',
	coralColorChartsColor09Strong: 'var(--coral-color-charts-color-09-strong, hsla(35,34%,27%,1))',
	coralColorChartsColor09Hover: 'var(--coral-color-charts-color-09-hover, hsla(35,34%,27%,1))',
	coralColorAccentBorder: 'var(--coral-color-accent-border, hsla(204,95%,31%,1))',
	coralColorChartsDefaultText: 'var(--coral-color-charts-default-text, hsla(205,87%,94%,1))',
	coralColorChartsDefaultTextStrong:
		'var(--coral-color-charts-default-text-strong, hsla(205,93%,22%,1))',
	coralColorChartsDefaultTextWeak:
		'var(--coral-color-charts-default-text-weak, hsla(207,93%,94%,1))',
	coralColorChartsColor09Text: 'var(--coral-color-charts-color-09-text, hsla(36,36%,5%,1))',
	coralColorChartsColor09TextStrong:
		'var(--coral-color-charts-color-09-text-strong, hsla(36,36%,5%,1))',
	coralColorChartsColor09TextWeak:
		'var(--coral-color-charts-color-09-text-weak, hsla(35,28%,82%,1))',
	coralColorNeutralBackgroundHeavy: 'var(--coral-color-neutral-background-heavy, hsla(0,0%,78%,1))',
	coralColorIllustrationColor01: 'var(--coral-color-illustration-color-01, hsla(252,43%,25%,1))',
	coralColorIllustrationColor02: 'var(--coral-color-illustration-color-02, hsla(215,69%,27%,1))',
	coralColorIllustrationColor03: 'var(--coral-color-illustration-color-03, hsla(0,100%,74%,1))',
	coralColorIllustrationColor05: 'var(--coral-color-illustration-color-05, hsla(20,23%,97%,1))',
	coralColorIllustrationColor04: 'var(--coral-color-illustration-color-04, hsla(201,41%,64%,1))',
	coralColorIllustrationColor06: 'var(--coral-color-illustration-color-06, hsla(245,46%,5%,1))',
	coralColorIllustrationSkintone01:
		'var(--coral-color-illustration-skintone-01, hsla(20,91%,83%,1))',
	coralColorIllustrationSkintone02:
		'var(--coral-color-illustration-skintone-02, hsla(21,34%,55%,1))',
	coralColorIllustrationSkintone03:
		'var(--coral-color-illustration-skintone-03, hsla(17,33%,28%,1))',
	coralColorIllustrationShadow: 'var(--coral-color-illustration-shadow, hsla(0,0%,0%,0.1))',
	coralColorBrandingBackground:
		'var(--coral-color-branding-background, linear-gradient(133deg,hsla(210,62%,26%,1) 0%, hsla(254,47%,23%,1) 100%))',
	coralColorBrandingNavigation:
		'var(--coral-color-branding-navigation, linear-gradient(133deg,hsla(210,62%,26%,1) 0%, hsla(254,47%,23%,1) 100%))',
	coralSpacingXxs: 'var(--coral-spacing-xxs, 0.4rem)',
	coralSpacingXs: 'var(--coral-spacing-xs, 0.8rem)',
	coralSpacingS: 'var(--coral-spacing-s, 1.2rem)',
	coralSpacingM: 'var(--coral-spacing-m, 1.6rem)',
	coralSpacingL: 'var(--coral-spacing-l, 2.8rem)',
	coralSpacingXl: 'var(--coral-spacing-xl, 3.6rem)',
	coralSizingMinimal: 'var(--coral-sizing-minimal, 1.2rem)',
	coralSizingXxxs: 'var(--coral-sizing-xxxs, 1.6rem)',
	coralSizingXxs: 'var(--coral-sizing-xxs, 2rem)',
	coralSizingXs: 'var(--coral-sizing-xs, 2.4rem)',
	coralSizingS: 'var(--coral-sizing-s, 2.8rem)',
	coralSizingM: 'var(--coral-sizing-m, 3.6rem)',
	coralSizingL: 'var(--coral-sizing-l, 4rem)',
	coralSizingXxxl: 'var(--coral-sizing-xxxl, 22rem)',
	coralSizingMaximal: 'var(--coral-sizing-maximal, 32rem)',
	coralElevationShadowNeutralM:
		'var(--coral-elevation-shadow-neutral-m, 0rem 0.2rem 0.6rem 0rem hsla(0,0%,0%,0.3))',
	coralElevationShadowAccent:
		'var(--coral-elevation-shadow-accent, 0rem 0.1rem 0.1rem 0rem hsla(204,95%,31%,0.3))',
	coralElevationShadowSuccess:
		'var(--coral-elevation-shadow-success, 0rem 0.1rem 0.1rem 0rem hsla(111,49%,34%,0.3))',
	coralElevationShadowDanger:
		'var(--coral-elevation-shadow-danger, 0rem 0.1rem 0.1rem 0rem hsla(359,51%,53%,0.3))',
	coralElevationShadowWarning:
		'var(--coral-elevation-shadow-warning, 0rem 0.1rem 0.1rem 0rem hsla(22,93%,41%,0.3))',
	coralElevationShadowBeta:
		'var(--coral-elevation-shadow-beta, 0rem 0.1rem 0.1rem 0rem hsla(281,58%,29%,0.3))',
	coralElevationShadowNeutralInvertedM:
		'var(--coral-elevation-shadow-neutral-inverted-m, 0rem -0.2rem 0.6rem 0rem hsla(0,0%,0%,0.3))',
	coralElevationShadowNeutralInvertedL:
		'var(--coral-elevation-shadow-neutral-inverted-l, 0rem -0.4rem 0.8rem 0rem hsla(0,0%,0%,0.3))',
	coralElevationShadowNeutralL:
		'var(--coral-elevation-shadow-neutral-l, 0rem 0.4rem 0.8rem 0rem hsla(0,0%,0%,0.3))',
	coralHeadingL: "var(--coral-heading-l, 600 1.8rem/140% 'Source Sans Pro')",
	coralParagraphM: "var(--coral-paragraph-m, 400 1.4rem/140% 'Source Sans Pro')",
	coralParagraphMBold: "var(--coral-paragraph-m-bold, 600 1.4rem/140% 'Source Sans Pro')",
	coralParagraphS: "var(--coral-paragraph-s, 400 1.2rem/140% 'Source Sans Pro')",
	coralParagraphSBold: "var(--coral-paragraph-s-bold, 600 1.2rem/140% 'Source Sans Pro')",
	coralHeadingM: "var(--coral-heading-m, 600 1.6rem/140% 'Source Sans Pro')",
	coralHeadingS: "var(--coral-heading-s, 600 1.4rem/140% 'Source Sans Pro')",
	coralRadiusM: 'var(--coral-radius-m, 0.8rem)',
	coralRadiusL: 'var(--coral-radius-l, 1.6rem)',
	coralRadiusRound: 'var(--coral-radius-round, 9999.9rem)',
	coralRadiusS: 'var(--coral-radius-s, 0.4rem)',
	coralBorderSSolid: 'var(--coral-border-s-solid, 1px solid)',
	coralBorderMSolid: 'var(--coral-border-m-solid, 2px solid)',
	coralBorderSDashed: 'var(--coral-border-s-dashed, 1px dashed)',
	coralBorderMDashed: 'var(--coral-border-m-dashed, 2px dashed)',
	coralOpacityL: 'var(--coral-opacity-l, 0.2)',
	coralOpacityM: 'var(--coral-opacity-m, 0.4)',
	coralOpacityS: 'var(--coral-opacity-s, 0.6)',
	coralBreakpointS: 'var(--coral-breakpoint-s, 40em)',
	coralBreakpointM: 'var(--coral-breakpoint-m, 48em)',
	coralBreakpointL: 'var(--coral-breakpoint-l, 64em)',
	coralBreakpointXl: 'var(--coral-breakpoint-xl, 80em)',
	coralBrandingLogo:
		'var(--coral-branding-logo, url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ3SURBVHgB7Zu/UxNBFMe/e6ahQ0qxiBpaQWfUTjM0aqMMnWMh1iJEeyHBXiLqjDM6IP+A0Dk2Gkq0EMaxkhmuADsgNmZGgfW9vZz5dUcul938uPGbCbnb+5H95L3bu33vIaBZMpXqxT6GADEIIYcgaFmilzbFq3a1aZtN2/KQIkdHrovn2Rw0S0CDilBJOtskrRKcAgqjPL1zEGJZzM0uQoOaAlRghwQlkUJ4KD/ZYNg/yIiXWRshFQrQMFjN11EvM/iNxTCgDQPK8dQIHbUA82DV2iTXzTTquoEBldUkpslyKbRTFmap1zMim80H2T0QIMHFCWyJAIfQGdqka3M4iMvWBVRwB/iI2mG+3QoEeSRgB8O5qgvpC9gFcK6OhPQEVAPKAb6g8+EcCeqrRZAeA4/leQCPlt0Cx5I4R+8pr001FpT3U2P0sYDuk6TXKD3PLpc3VlhQXXdQ1jOn61eBvj4YkKDXE3V5lanSRQ9xByZd89IFArwGDJyBIZ2ih/6KB5F/gMp6EmmYUk+PA2daAhPlVixZcN8gHMuca1breLkVS4ACV2BKDJc0d/oalVlRARZHzjhMiOFa4ZqVoumcUL+oa8Gb0C2+5m7fagccS0DKSWcByoJ70DW/Y7DkZccledlLGxvAzm5l2y6tv3sPjdrDMZyO0QQ2CV1woyN0K7joD+YqkaB3VdvOjm5AFfyKqTmeltATnFFya9tZHkj471coAL8KlW1fv0G7JANaGkfP1/POJ4OmH/nv93YJWP0MwxLEdpYHmVbHVloniskyYBxRFQWcow1IbBYirv+A3S4GtBFd2ZZKX0VVkgGBdURVAj/ZgmuIpiSFYFYsoowqIFtwzUJMAUbxOsxzStwqRoOjaMUV/uPcByWeIlqSnOfnBQcwRrnwVrqp+eia7WaCFaByU51W5AltoeC/PeExGU5QMLi/H5qUcxdiKC1lKaPEgZrm54cMxzN7v1k9t3NAiuMwHN5g4JME951iNc9eoElJSqfNuCsVwQqKz6SpRU9ugt1w4l5wd+Qf5dW8E5BqRhIZGj3T7mrlwzZbkROKOsTWmSNrrH7iL/UXg3GwKf24eTju+z7elDfUps+cMpEl6BRbUbnhiVLEbesHsL2tA8oVj5x3q8tMvDO84yku1WhvuUijksiSaz6obvaeD8aQUWnh7tGm6rOHPAHVbcPCKHRdj2blFCH4FAYFKSP5AE4sdqbCl5G46mDIQIVAdWMyZHqbkhjD6CR35fEhYClXoKBTEfI8j1Q4+q5mXtwHKxgcq/FySidZyjUprXbZTYJ7WF0mUk9hC2Lj9MQwRkdPhT1HA3ImAvSUFbSEslzNljQz6HQxvx+HXtimwFxp65ByXYkbdMYkSjOSRs+fLwbBGCzXDBhCdiCQilnjQXqzZXvpW+KotbCtYrIc9JJijf+tgONDOqDK9RfJ1nAWmpwCzwAAAABJRU5ErkJggg=="))',
	coralTransitionInstant: 'var(--coral-transition-instant, 100ms ease-out)',
	coralTransitionFast: 'var(--coral-transition-fast, 250ms ease-in-out)',
	coralTransitionNormal: 'var(--coral-transition-normal, 300ms ease-in-out)',
	coralTransitionSlow: 'var(--coral-transition-slow, 400ms ease-in)',
	coralElevationLayerFlat: 'var(--coral-elevation-layer-flat, 0)',
	coralElevationLayerStandardFront: 'var(--coral-elevation-layer-standard-front, 4)',
	coralElevationLayerInteractiveFront: 'var(--coral-elevation-layer-interactive-front, 8)',
	coralElevationLayerOverlay: 'var(--coral-elevation-layer-overlay, 16)',
	coralAnimationHeartbeat:
		'var(--coral-animation-heartbeat, coral-light-keyframes-blink 1.5s cubic-bezier(0.7, 0, 1, 1) infinite)',
};

export default tokens;
