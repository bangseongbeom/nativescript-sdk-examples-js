"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var button_1 = require("tns-core-modules/ui/button");
var label_1 = require("tns-core-modules/ui/label");
var text_field_1 = require("tns-core-modules/ui/text-field");
var text_view_1 = require("tns-core-modules/ui/text-view");
var formatted_string_1 = require("tns-core-modules/text/formatted-string");
function onNavigatingTo(args) {
    var page = args.object;
    var container = page.getViewById("container");
    var label = new label_1.Label();
    var firstLabelSpan = new formatted_string_1.Span();
    firstLabelSpan.text = "Formatted String ";
    var secondLabelSpan = new formatted_string_1.Span();
    secondLabelSpan.text = "Label";
    var formattedStringLabel = new formatted_string_1.FormattedString();
    formattedStringLabel.spans.push(firstLabelSpan);
    formattedStringLabel.spans.push(secondLabelSpan);
    label.formattedText = formattedStringLabel;
    var button = new button_1.Button();
    var formattedStringButton = new formatted_string_1.FormattedString();
    var firstButtonSpan = new formatted_string_1.Span();
    var secondButtonSpan = new formatted_string_1.Span();
    firstButtonSpan.text = "Formatted String ";
    secondButtonSpan.text = "Button";
    formattedStringButton.spans.push(firstButtonSpan);
    formattedStringButton.spans.push(secondButtonSpan);
    button.formattedText = formattedStringButton;
    var textField = new text_field_1.TextField();
    var formattedStringTextField = new formatted_string_1.FormattedString();
    var firstTextFieldSpan = new formatted_string_1.Span();
    var secondTextFieldSpan = new formatted_string_1.Span();
    firstTextFieldSpan.fontSize = 15;
    firstTextFieldSpan.text = "Formatted String ";
    secondTextFieldSpan.text = "TextField";
    formattedStringTextField.spans.push(firstTextFieldSpan);
    formattedStringTextField.spans.push(secondTextFieldSpan);
    textField.formattedText = formattedStringTextField;
    var textView = new text_view_1.TextView();
    var formattedStringTextView = new formatted_string_1.FormattedString();
    var firstTextViewSpan = new formatted_string_1.Span();
    var secondTextViewSpan = new formatted_string_1.Span();
    firstTextViewSpan.fontSize = 15;
    firstTextViewSpan.text = "Formatted String ";
    secondTextViewSpan.text = "TextView";
    formattedStringTextView.spans.push(firstTextViewSpan);
    formattedStringTextView.spans.push(secondTextViewSpan);
    textView.formattedText = formattedStringTextView;
    container.addChild(label);
    container.addChild(button);
    container.addChild(textField);
    container.addChild(textView);
}
exports.onNavigatingTo = onNavigatingTo;
