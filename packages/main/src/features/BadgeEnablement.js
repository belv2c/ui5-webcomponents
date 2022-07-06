import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { registerFeature } from "@ui5/webcomponents-base/dist/FeaturesRegistry.js";
import BadgeEnablementTemplate from "../generated/templates/BadgeEnablementTemplate.lit.js";
import badgeEnablementCss from "../generated/themes/BadgeEnablement.css.js";

const metadata = {
	tag: "ui5-badge-enablement",
	properties: {
		type: {
			type: String,
		},
	},
};

class BadgeEnablement extends UI5Element {
	constructor(component) {
		super();
		this.type = component.localName.substring(4);
	}

	static get metadata() {
		return metadata;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return BadgeEnablementTemplate;
	}

	static get styles() {
		return badgeEnablementCss;
	}
}

BadgeEnablement.define();

registerFeature("BadgeEnablement", BadgeEnablement);
