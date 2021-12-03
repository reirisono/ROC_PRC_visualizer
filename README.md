# ROC_PRC_visualizer
A web-based biostat app to visualize region of utility of an ROC or PRC given the pretest probability (prevalence).
<h1>Region of Utility – brief statement</h1>

<p >In a diagnostic test, the usual measure of how
&quot;good&quot; (i.e. discriminative) it is in general is based on certain
features of the ROC curve such as its <i>area under the curve</i> or the
closeness of its peak to the top left corner of the curve. However, a generally
&quot;good&quot; test may not be applicable to all situations given certain
disease prevalence and a need to achieve minimal <i>positive predictive value</i>
(PPV) or <i>negative predictive value</i> (NPV). Therefore, I propose here
another measurement titled the <i>region of utility</i>, referring to a limited
estate within the square coordinate of the ROC or PRC curve defined by one’s
desired thresholds for minimal sensitivity (i.e. <i>recall</i>), PPV (i.e. <i>precision</i>),
and NPV. For a test to be useful, its curve must fall within this <i>region of
utility</i>. Only then can one choose the best test threshold from within this
region – i.e. the point on the ROC curve closest to the top left corner. We
present a web-based interactive visual representation (<a
href="https://reirisono.github.io/ROC_PRC_visualizer/visualizer.html">https://reirisono.github.io/ROC_PRC_visualizer/visualizer.html</a>
as of 20211102) with its derivation explained below.</p>

<h1>Supplementary Document: ROC curve interpretation 20191025 Reiri Sono</h1>

<p >Receiver operating characteristic (ROC) curve plots <i>Sensitivity</i>
over 1-<i>Specificity</i>, two variables independent of disease prevalence. These
parameters are alternatively called <i>true positive rate (TPR) </i>over <i>false
positive rate (FPR)</i>, which can be confused with <i>True Positive (TP) </i>and
<i>False Positive (FP)</i>. This section goes over the interpretation of the <i>Sensitivity</i>
over 1-<i>Specificity</i> (“Sens/Spec”) curve relative to changes in <i>Positive
Predictive Value</i> (PPV) and <i>Prevalence</i>, then translates it to a
hypothetical plot of <i>TP</i> over <i>FP </i>(“TP/FP curve”) dependent on <i>Prevalence</i>.
It will discuss how each coordinate system can express <i>region of utility</i>,
dictated by PPV, in order to indicate the practical limitation of choice of
test threshold. It will visualize how the TP/FP curve spatially “contains” an
axis-scaled version of the Sens/Spec curve. It will walk through the derivation
of each key term on the Sens/Spec and TP/FP curve.</p>

<p ><o:p>&nbsp;</o:p></p>

<p >The rest of the document will refer to variables A, B, C, D
according to this 2x2 predictor-outcome matrix derived from disease and healthy
samples reflecting the disease prevalence:</p>

<table  border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0in 5.4pt 0in 5.4pt'>
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
  <td width=105 valign=top style='width:78.45pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p >Test \ Disease</p>
  </td>
  <td width=87 valign=top style='width:65.05pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p >Disease (+)</p>
  </td>
  <td width=84 valign=top style='width:62.95pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p >Disease (-)</p>
  </td>
  <td width=153 valign=top style='width:114.65pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p >Subtotal</p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1'>
  <td width=105 valign=top style='width:78.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p >Test (+)</p>
  </td>
  <td width=87 valign=top style='width:65.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p  align=center style='text-align:center'>A</p>
  </td>
  <td width=84 valign=top style='width:62.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p  align=center style='text-align:center'>B</p>
  </td>
  <td width=153 valign=top style='width:114.65pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p >A+B</p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2'>
  <td width=105 valign=top style='width:78.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p >Test (-)</p>
  </td>
  <td width=87 valign=top style='width:65.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p  align=center style='text-align:center'>C</p>
  </td>
  <td width=84 valign=top style='width:62.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p  align=center style='text-align:center'>D</p>
  </td>
  <td width=153 valign=top style='width:114.65pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p >C+D</p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:3;mso-yfti-lastrow:yes'>
  <td width=105 valign=top style='width:78.45pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p >Subtotal</p>
  </td>
  <td width=87 valign=top style='width:65.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p  align=center style='text-align:center'>A+C</p>
  </td>
  <td width=84 valign=top style='width:62.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p  align=center style='text-align:center'>B+D</p>
  </td>
  <td width=153 valign=top style='width:114.65pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p >A+B+C+D=1, i.e. 100%</p>
  </td>
 </tr>
</table>

<p ><!--[if gte msEquation 12]><m:oMathPara><m:oMath><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>Sensitivity</m:r><m:r>=
   </m:r></span></i><m:f><m:fPr><span style='font-family:"Cambria Math",serif;
    mso-ascii-font-family:"Cambria Math";mso-hansi-font-family:"Cambria Math";
    font-style:italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>A</m:r></span></i></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>A</m:r><m:r>+</m:r><m:r>C</m:r></span></i></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>,</m:r><m:r>Specificity</m:r><m:r>=</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>D</m:r></span></i></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>B</m:r><m:r>+</m:r><m:r>D</m:r></span></i></m:den></m:f></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shapetype id="_x0000_t75"
 coordsize="21600,21600" o:spt="75" o:preferrelative="t" path="m@4@5l@4@11@9@11@9@5xe"
 filled="f" stroked="f">
 <v:stroke joinstyle="miter"/>
 <v:formulas>
  <v:f eqn="if lineDrawn pixelLineWidth 0"/>
  <v:f eqn="sum @0 1 0"/>
  <v:f eqn="sum 0 0 @1"/>
  <v:f eqn="prod @2 1 2"/>
  <v:f eqn="prod @3 21600 pixelWidth"/>
  <v:f eqn="prod @3 21600 pixelHeight"/>
  <v:f eqn="sum @0 0 1"/>
  <v:f eqn="prod @6 1 2"/>
  <v:f eqn="prod @7 21600 pixelWidth"/>
  <v:f eqn="sum @8 21600 0"/>
  <v:f eqn="prod @7 21600 pixelHeight"/>
  <v:f eqn="sum @10 21600 0"/>
 </v:formulas>
 <v:path o:extrusionok="f" gradientshapeok="t" o:connecttype="rect"/>
 <o:lock v:ext="edit" aspectratio="t"/>
</v:shapetype><v:shape id="_x0000_i1025" type="#_x0000_t75" style='width:202pt;
 height:25pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image001.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=202 height=25
src="ROC%20scale%20interp%2020191025.fld/image002.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]></p>

<p ><!--[if gte msEquation 12]><m:oMathPara><m:oMath><m:sSup><m:sSupPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";mso-fareast-language:JA;font-style:
    italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>LR</m:r></span></i></m:e><m:sup><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>+</m:r></span></i></m:sup></m:sSup><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
  mso-fareast-language:JA'><m:r> =</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";mso-fareast-language:JA;font-style:
    italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>Sens</m:r></span></i></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>1-</m:r><m:r>Spec</m:r></span></i></m:den></m:f><m:sSup><m:sSupPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";mso-fareast-language:JA;font-style:
    italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>,</m:r><m:r>LR</m:r></span></i></m:e><m:sup><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>-</m:r></span></i></m:sup></m:sSup><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
  mso-fareast-language:JA'><m:r>=</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";mso-fareast-language:JA;font-style:
    italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>1-</m:r><m:r>Sens</m:r></span></i></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>Spec</m:r></span></i></m:den></m:f></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
 type="#_x0000_t75" style='width:160pt;height:27pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image003.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=160 height=27
src="ROC%20scale%20interp%2020191025.fld/image004.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]><span
style='mso-fareast-language:JA'><o:p></o:p></span></p>

<p ><!--[if gte msEquation 12]><m:oMathPara><m:oMath><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>Prevalence</m:r><m:r>=</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>A</m:r><m:r>+</m:r><m:r>C</m:r></span></i></m:num><m:den><m:d><m:dPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:dPr><m:e><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>A</m:r><m:r>+</m:r><m:r>C</m:r></span></i></m:e></m:d><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+(</m:r><m:r>B</m:r><m:r>+</m:r><m:r>D</m:r><m:r>)</m:r></span></i></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>=</m:r><m:r>A</m:r><m:r>+</m:r><m:r>C</m:r><m:r>,
   </m:r></span></i><i style='mso-bidi-font-style:normal'><span
  style='font-family:"Cambria Math",serif;mso-fareast-language:JA'><m:r>OR</m:r><m:r>=</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";mso-fareast-language:JA;font-style:
    italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>A</m:r><m:r>+</m:r><m:r>C</m:r></span></i></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>B</m:r><m:r>+</m:r><m:r>D</m:r></span></i></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
  mso-fareast-language:JA'><m:r>=</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";mso-fareast-language:JA;font-style:
    italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>Prev</m:r></span></i></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>1-</m:r><m:r>Prev</m:r></span></i></m:den></m:f></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
 type="#_x0000_t75" style='width:318pt;height:27pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image005.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=318 height=27
src="ROC%20scale%20interp%2020191025.fld/image006.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]></p>

<p ><!--[if gte msEquation 12]><m:oMathPara><m:oMath><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>PPV</m:r><m:r>=</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>A</m:r></span></i></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>A</m:r><m:r>+</m:r><m:r>B</m:r></span></i></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>,</m:r><m:r>NPV</m:r><m:r>=</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>D</m:r></span></i></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>C</m:r><m:r>+</m:r><m:r>D</m:r></span></i></m:den></m:f></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
 type="#_x0000_t75" style='width:133pt;height:25pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image007.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=133 height=25
src="ROC%20scale%20interp%2020191025.fld/image008.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]></p>

<p ><span style='mso-fareast-language:JA'>Note that the equations
of <i>Prevalence</i>, <i>Odds Ratio</i>, and <i>PPV</i> apply only when the
diseased and healthy samples were taken proportionally to reflect the disease
prevalence.<o:p></o:p></span></p>

<p >Sensitivity and Specificity are both independent of
prevalence. The graph below is an example of diagnostic test that returns a
higher value, albeit with overlap, in the diseased population, hence (+) when
the value is high. Using the 2<sup>nd</sup> diagram, each quadrant of the 2x2
matrix can be visually represented as these colored areas:</p>

<p ><!--[if gte vml 1]><v:shape id="Picture_x0020_2" o:spid="_x0000_s1029"
 type="#_x0000_t75" alt="Image result for diagnostic test threshold diagram"
 style='position:absolute;margin-left:199.75pt;margin-top:3.8pt;width:260.5pt;
 height:153pt;z-index:251659264;visibility:visible;mso-wrap-style:square;
 mso-width-percent:0;mso-height-percent:0;mso-wrap-distance-left:9pt;
 mso-wrap-distance-top:0;mso-wrap-distance-right:9pt;
 mso-wrap-distance-bottom:0;mso-position-horizontal:absolute;
 mso-position-horizontal-relative:text;mso-position-vertical:absolute;
 mso-position-vertical-relative:text;mso-width-percent:0;mso-height-percent:0;
 mso-width-relative:page;mso-height-relative:page'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image009.png" o:title="Image result for diagnostic test threshold diagram"/>
 <w:wrap type="square"/>
</v:shape><![endif]--><![if !vml]><img width=261 height=153
src="ROC%20scale%20interp%2020191025.fld/image009.png" align=left hspace=12
alt="Image result for diagnostic test threshold diagram" v:shapes="Picture_x0020_2"><![endif]><span
style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape id="Picture_x0020_3"
 o:spid="_x0000_i1041" type="#_x0000_t75" style='width:83pt;height:65pt;
 visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image010.jpg" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=83 height=65
src="ROC%20scale%20interp%2020191025.fld/image010.jpg" v:shapes="Picture_x0020_3"><![endif]><!--[if gte vml 1]><v:shape
 id="Picture_x0020_5" o:spid="_x0000_i1040" type="#_x0000_t75" style='width:63pt;
 height:48pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image011.jpg" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=63 height=48
src="ROC%20scale%20interp%2020191025.fld/image011.jpg" v:shapes="Picture_x0020_5"><![endif]></span></p>

<p ><span style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
 id="Picture_x0020_4" o:spid="_x0000_i1039" type="#_x0000_t75" style='width:62pt;
 height:60pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image012.jpg" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=62 height=60
src="ROC%20scale%20interp%2020191025.fld/image012.jpg" v:shapes="Picture_x0020_4"><![endif]><span
style='mso-spacerun:yes'> </span><!--[if gte vml 1]><v:shape id="Picture_x0020_6"
 o:spid="_x0000_i1038" type="#_x0000_t75" style='width:117pt;height:85pt;
 visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image013.jpg" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=117 height=85
src="ROC%20scale%20interp%2020191025.fld/image013.jpg" v:shapes="Picture_x0020_6"><![endif]><o:p></o:p></span></p>

<p >Since <i>Sensitivity</i> and <i>Specificity</i> each is a
ratio within the same bell curve, the sizes of the bell curves are factored out,
i.e. do not affect sensitivity or specificity.</p>

<p ><o:p>&nbsp;</o:p></p>

<h2>Sens/Spec curve: Y = Sensitivity, X = (1-Specificity)</h2>

<p >Using a stricter threshold for test positivity is
represented as sliding the vertical red bar to the right on the 2<sup>nd</sup>
diagram. This alters the <i>Sensitivity </i>and <i>1-Specificity </i>in the
following way, explaining how a stricter threshold is represented as a
coordinate along the bottom left of the curve B on the Sens/Spec curve. </p>

<p ><o:p>&nbsp;</o:p></p>

<table  border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0in 5.4pt 0in 5.4pt'>
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
  <td width=174 valign=top style='width:130.25pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><o:p>&nbsp;</o:p></p>
  </td>
  <td width=210 valign=top style='width:157.5pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p >Strict threshold (to the right on the double bell curves,
  if large value = (+) test so that diseased population more likely tests (+);
  to the left if otherwise)</p>
  </td>
  <td width=227 valign=top style='width:170.5pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p >Lenient threshold (to the left on the double bell curves,
  if large value = (+) test so that diseased population more likely tests (+);
  to the right if otherwise)</p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1'>
  <td width=174 valign=top style='width:130.25pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p ><i>Sensitivity<o:p></o:p></i></p>
  </td>
  <td width=210 valign=top style='width:157.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p >0 ≤ low</p>
  </td>
  <td width=227 valign=top style='width:170.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p >high ≤ 1</p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2'>
  <td width=174 valign=top style='width:130.25pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p >1-<i>Specificity<o:p></o:p></i></p>
  </td>
  <td width=210 valign=top style='width:157.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p >0 ≤ low</p>
  </td>
  <td width=227 valign=top style='width:170.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p >high ≤ 1</p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:3'>
  <td width=174 valign=top style='width:130.25pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p >slope through origin = LR<sup>+</sup></p>
  </td>
  <td width=210 valign=top style='width:157.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p >∞ ≥ high</p>
  </td>
  <td width=227 valign=top style='width:170.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p >low ≥ 1</p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:4;mso-yfti-lastrow:yes'>
  <td width=174 valign=top style='width:130.25pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p >slope through (1,1) = LR<sup>-</sup><i><o:p></o:p></i></p>
  </td>
  <td width=210 valign=top style='width:157.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p >high ≤ 1</p>
  </td>
  <td width=227 valign=top style='width:170.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p >low ≥ 0</p>
  </td>
 </tr>
</table>

<p ><!--[if gte vml 1]><v:shape id="Picture_x0020_18" o:spid="_x0000_s1028"
 type="#_x0000_t75" style='position:absolute;margin-left:232.25pt;margin-top:0;
 width:259.7pt;height:259.7pt;z-index:251665408;visibility:visible;
 mso-wrap-style:square;mso-width-percent:0;mso-height-percent:0;
 mso-wrap-distance-left:9pt;mso-wrap-distance-top:0;mso-wrap-distance-right:9pt;
 mso-wrap-distance-bottom:0;mso-position-horizontal:absolute;
 mso-position-horizontal-relative:text;mso-position-vertical:absolute;
 mso-position-vertical-relative:text;mso-width-percent:0;mso-height-percent:0;
 mso-width-relative:page;mso-height-relative:page'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image014.jpg" o:title=""/>
 <w:wrap type="square"/>
</v:shape><![endif]--><![if !vml]><img width=260 height=260
src="ROC%20scale%20interp%2020191025.fld/image014.jpg" align=left hspace=12
v:shapes="Picture_x0020_18"><![endif]></p>

<p >FYI: The top left corner (X, Y) = (0, 1) represents the
perfectly discriminative test that all tests should aspire to; however, overlaps
in the result bell curves of disease (+) and (-) groups precludes reaching this
point. The diagonal line with slope = 1 represents a “no skill” test with no discriminative
power, i.e. where the bell-shaped histograms of the test results in the Disease
(+) &amp; Disease (-) populations completely overlap, hence rendering an
identical values for <!--[if gte msEquation 12]><m:oMath><i style='mso-bidi-font-style:
 normal'><span style='font-family:"Cambria Math",serif'><m:r>Sensitivity</m:r><m:r>=
  </m:r><m:r>A</m:r><m:r>/(</m:r><m:r>A</m:r><m:r>+</m:r><m:r>C</m:r><m:r>)</m:r></span></i></m:oMath><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;position:relative;top:2.0pt;mso-text-raise:-2.0pt;
mso-ansi-language:EN-US;mso-fareast-language:ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape
 id="_x0000_i1025" type="#_x0000_t75" style='width:120pt;height:13pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image015.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=120 height=13
src="ROC%20scale%20interp%2020191025.fld/image016.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]><span
style='mso-spacerun:yes'> </span>&amp; <!--[if gte msEquation 12]><m:oMath><i
 style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>Specificity</m:r><m:r>=</m:r><m:r>B</m:r><m:r>/(</m:r><m:r>B</m:r><m:r>+</m:r><m:r>D</m:r><m:r>)</m:r></span></i></m:oMath><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;position:relative;top:2.0pt;mso-text-raise:-2.0pt;
mso-ansi-language:EN-US;mso-fareast-language:ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape
 id="_x0000_i1025" type="#_x0000_t75" style='width:139pt;height:13pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image017.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=139 height=13
src="ROC%20scale%20interp%2020191025.fld/image018.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]><span
style='mso-spacerun:yes'> </span>identical no matter where the red threshold
is.</p>

<h3><span style='mso-fareast-language:JA'>Experiment: region of utility defined
by desired <i>PPV</i> &amp; <i>NPV</i> and local <i>Prevalence<o:p></o:p></i></span></h3>

<p ><b><span style='mso-fareast-language:JA'>Question: </span></b><span
style='mso-fareast-language:JA'>given a <i>Prevalence</i> and desired <i>PPV</i>
and <i>NPV</i>, what is the range of <i>Sensitivity</i> and <i>Specificity</i>
that a test can achieve? What are the tradeoffs?<o:p></o:p></span></p>

<p ><b><span style='mso-fareast-language:JA'>Indication: </span></b><span
style='mso-fareast-language:JA'>This thought process is used to select the best
test for the purpose: only those with a curve that crosses or loops above the
required <i>Sensitivity</i> and <i>Specificity</i> coordinate can perform at
the desired <i>PPV</i>, <i>NPV</i>, and practical limitation of <i>Prevalence</i>.<o:p></o:p></span></p>

<p ><span style='mso-fareast-language:JA'><o:p>&nbsp;</o:p></span></p>

<p ><span style='mso-fareast-language:JA'>PPV and NPV are inevitable
results of Sensitivity, Specificity, and Prevalence:<o:p></o:p></span></p>

<p ><!--[if gte msEquation 12]><m:oMathPara><m:oMath><m:m><m:mPr><m:mcs><m:mc><m:mcPr><m:count
        m:val="1"/><m:mcJc m:val="left"/></m:mcPr></m:mc></m:mcs><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:mPr><m:mr><m:e><i style='mso-bidi-font-style:
     normal'><span style='font-family:"Cambria Math",serif'><m:r>PPV</m:r><m:r>=</m:r></span></i><m:f><m:fPr><span
       style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
       mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
       normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
       normal'><span style='font-family:"Cambria Math",serif'><m:r>A</m:r></span></i></m:num><m:den><i
       style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>A</m:r><m:r>+</m:r><m:r>B</m:r></span></i></m:den></m:f><i
     style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>=
      </m:r></span></i><m:f><m:fPr><span style='font-family:"Cambria Math",serif;
       mso-ascii-font-family:"Cambria Math";mso-hansi-font-family:"Cambria Math";
       font-style:italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><m:f><m:fPr><span
         style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
         mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
         normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i
         style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>A</m:r></span></i></m:num><m:den><i
         style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>A</m:r><m:r>+</m:r><m:r>C</m:r></span></i></m:den></m:f></m:num><m:den><m:f><m:fPr><span
         style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
         mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
         normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i
         style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>A</m:r></span></i></m:num><m:den><i
         style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>A</m:r><m:r>+</m:r><m:r>C</m:r></span></i></m:den></m:f><i
       style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i><m:f><m:fPr><span
         style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
         mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
         normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i
         style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>B</m:r></span></i></m:num><m:den><i
         style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>B</m:r><m:r>+</m:r><m:r>D</m:r></span></i></m:den></m:f><i
       style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r></span></i><m:f><m:fPr><span
         style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
         mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
         normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i
         style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>B</m:r><m:r>+</m:r><m:r>D</m:r></span></i></m:num><m:den><i
         style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>A</m:r><m:r>+</m:r><m:r>C</m:r></span></i></m:den></m:f></m:den></m:f><i
     style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>=</m:r></span></i><m:f><m:fPr><span
       style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
       mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
       normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
       normal'><span style='font-family:"Cambria Math",serif'><m:r>Sens</m:r></span></i></m:num><m:den><i
       style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>Sens</m:r><m:r>+</m:r></span></i><m:d><m:dPr><span
         style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
         mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
         normal'><m:ctrlPr></m:ctrlPr></span></m:dPr><m:e><i style='mso-bidi-font-style:
         normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>Spec</m:r></span></i></m:e></m:d><m:f><m:fPr><span
         style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
         mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
         normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i
         style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>Prev</m:r></span></i></m:num><m:den><i
         style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>Prev</m:r></span></i></m:den></m:f></m:den></m:f></m:e></m:mr><m:mr><m:e><i
     style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>=</m:r></span></i><m:f><m:fPr><span
       style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
       mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
       normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><m:f><m:fPr><span
         style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
         mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
         normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i
         style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>Sens</m:r></span></i></m:num><m:den><i
         style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>Spec</m:r></span></i></m:den></m:f></m:num><m:den><m:f><m:fPr><span
         style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
         mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
         normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i
         style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>Sens</m:r></span></i></m:num><m:den><i
         style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>Spec</m:r></span></i></m:den></m:f><i
       style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i><m:f><m:fPr><span
         style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
         mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
         normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i
         style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>Prev</m:r></span></i></m:num><m:den><i
         style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>Prev</m:r></span></i></m:den></m:f></m:den></m:f><i
     style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>=</m:r></span></i><m:f><m:fPr><span
       style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
       mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
       normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><m:sSup><m:sSupPr><span
         style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
         mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
         normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i
         style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>LR</m:r></span></i></m:e><m:sup><i
         style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i></m:sup></m:sSup></m:num><m:den><m:sSup><m:sSupPr><span
         style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
         mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
         normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i
         style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>LR</m:r></span></i></m:e><m:sup><i
         style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i></m:sup></m:sSup><i
       style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i><m:f><m:fPr><span
         style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
         mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
         normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i
         style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1</m:r></span></i></m:num><m:den><i
         style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>OR</m:r></span></i></m:den></m:f></m:den></m:f></m:e></m:mr></m:m></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
 type="#_x0000_t75" style='width:336pt;height:95pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image019.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=336 height=95
src="ROC%20scale%20interp%2020191025.fld/image020.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]></p>

<p ><!--[if gte msEquation 12]><m:oMathPara><m:oMathParaPr><m:jc
   m:val="left"/></m:oMathParaPr><m:oMath><i style='mso-bidi-font-style:normal'><span
  style='font-family:"Cambria Math",serif'><m:r>NPV</m:r><m:r>=</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>D</m:r></span></i></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>C</m:r><m:r>+</m:r><m:r>D</m:r></span></i></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>=
   </m:r></span></i><m:f><m:fPr><span style='font-family:"Cambria Math",serif;
    mso-ascii-font-family:"Cambria Math";mso-hansi-font-family:"Cambria Math";
    font-style:italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><m:f><m:fPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>D</m:r></span></i></m:num><m:den><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>B</m:r><m:r>+</m:r><m:r>D</m:r></span></i></m:den></m:f></m:num><m:den><m:f><m:fPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>C</m:r></span></i></m:num><m:den><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>A</m:r><m:r>+</m:r><m:r>C</m:r></span></i></m:den></m:f><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r></span></i><m:f><m:fPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>A</m:r><m:r>+</m:r><m:r>C</m:r></span></i></m:num><m:den><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>B</m:r><m:r>+</m:r><m:r>D</m:r></span></i></m:den></m:f><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i><m:f><m:fPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>D</m:r></span></i></m:num><m:den><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>B</m:r><m:r>+</m:r><m:r>D</m:r></span></i></m:den></m:f></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>=</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>Spec</m:r></span></i></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>(1-</m:r><m:r>Sens</m:r><m:r>)*</m:r></span></i><m:f><m:fPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>Prev</m:r></span></i></m:num><m:den><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>Prev</m:r></span></i></m:den></m:f><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r><m:r>Spec</m:r></span></i></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>=</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>1</m:r></span></i></m:num><m:den><m:f><m:fPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>Sens</m:r></span></i></m:num><m:den><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>Spec</m:r></span></i></m:den></m:f><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r></span></i><m:f><m:fPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>Prev</m:r></span></i></m:num><m:den><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>Prev</m:r></span></i></m:den></m:f><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+1</m:r></span></i></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>=</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>1</m:r></span></i></m:num><m:den><m:sSup><m:sSupPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>LR</m:r></span></i></m:e><m:sup><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>-</m:r></span></i></m:sup></m:sSup><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r><m:r>OR</m:r><m:r>+1</m:r></span></i></m:den></m:f></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
 type="#_x0000_t75" style='width:468pt;height:82pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image021.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=468 height=82
src="ROC%20scale%20interp%2020191025.fld/image022.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]></p>

<p ><o:p>&nbsp;</o:p></p>

<p >These transformations are useful in that they separate
contributions to <i>PPV</i> or <i>NPV </i>into test-dependent (<i>threshold-dependent</i>
to be exact), population-independent variables (<i>Sensitivity</i>, <i>Specificity</i>,
<i>LR<sup>+</sup></i>, <i>LR</i><sup>-</sup>) vs. test-independent,
population-dependent variable (<i>Prevalence</i> and <i>Odds Ratio</i>). Sliding
along the test threshold:</p>

<table  border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0in 5.4pt 0in 5.4pt'>
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
  <td width=210 valign=top style='width:157.65pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><o:p>&nbsp;</o:p></p>
  </td>
  <td width=200 valign=top style='width:150.3pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p >Strict threshold</p>
  </td>
  <td width=200 valign=top style='width:150.3pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p >Lenient threshold</p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1'>
  <td width=210 valign=top style='width:157.65pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p >PPV</p>
  </td>
  <td width=200 valign=top style='width:150.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p >high ≤ 1</p>
  </td>
  <td width=200 valign=top style='width:150.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p >low ≥ <i>Prevalence</i></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2;mso-yfti-lastrow:yes'>
  <td width=210 valign=top style='width:157.65pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p >NPV </p>
  </td>
  <td width=200 valign=top style='width:150.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p >low ≥ 1-<i>Prevalence<o:p></o:p></i></p>
  </td>
  <td width=200 valign=top style='width:150.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p >high ≤ 1</p>
  </td>
 </tr>
</table>

<p ><o:p>&nbsp;</o:p></p>

<p ><span style='mso-fareast-language:JA'>Transforming this
equation to answer the question: given a <i>Prevalence</i> and a minimum goal <i>PPV</i>
and <i>NPV</i>, what range of the <i>LR<sup>+</sup> and LR<sup>-</sup> </i></span>must
be satisfied?</p>

<p ><!--[if gte msEquation 12]><m:oMathPara><m:oMath><m:sSub><m:sSubPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>PPV</m:r></span></i></m:e><m:sub><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>mingoal</m:r></span></i></m:sub></m:sSub><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>≤</m:r></span></i><m:sSub><m:sSubPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>PPV</m:r></span></i></m:e><m:sub><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>actual</m:r></span></i></m:sub></m:sSub><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>=</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><m:sSup><m:sSupPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";mso-fareast-language:JA;font-style:
      italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
      mso-fareast-language:JA'><m:r>LR</m:r></span></i></m:e><m:sup><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
      mso-fareast-language:JA'><m:r>+</m:r></span></i></m:sup></m:sSup></m:num><m:den><m:sSup><m:sSupPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";mso-fareast-language:JA;font-style:
      italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
      mso-fareast-language:JA'><m:r>LR</m:r></span></i></m:e><m:sup><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
      mso-fareast-language:JA'><m:r>+</m:r></span></i></m:sup></m:sSup><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i><m:f><m:fPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>1</m:r></span></i></m:num><m:den><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>OR</m:r></span></i></m:den></m:f></m:den></m:f></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
 type="#_x0000_t75" style='width:174pt;height:37pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image023.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=174 height=37
src="ROC%20scale%20interp%2020191025.fld/image024.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]><span
style='mso-fareast-language:JA'><o:p></o:p></span></p>

<p ><!--[if gte msEquation 12]><m:oMathPara><m:oMath><m:sSup><m:sSupPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";mso-fareast-language:JA;font-style:
    italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>LR</m:r></span></i></m:e><m:sup><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>+</m:r></span></i></m:sup></m:sSup><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>≥</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><m:sSub><m:sSubPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>PPV</m:r></span></i></m:e><m:sub><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>mingoal</m:r></span></i></m:sub></m:sSub></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r></span></i><m:sSub><m:sSubPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>PPV</m:r></span></i></m:e><m:sub><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>mingoal</m:r></span></i></m:sub></m:sSub></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>1</m:r></span></i></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>OR</m:r></span></i></m:den></m:f></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
 type="#_x0000_t75" style='width:131pt;height:29pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image025.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=131 height=29
src="ROC%20scale%20interp%2020191025.fld/image026.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]></p>

<p ><!--[if gte msEquation 12]><m:oMathPara><m:oMath><m:sSub><m:sSubPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>NPV</m:r></span></i></m:e><m:sub><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>mingoal</m:r></span></i></m:sub></m:sSub><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>≤</m:r></span></i><m:sSub><m:sSubPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>NPV</m:r></span></i></m:e><m:sub><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>actual</m:r></span></i></m:sub></m:sSub><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>=</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>1</m:r></span></i></m:num><m:den><m:sSup><m:sSupPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>LR</m:r></span></i></m:e><m:sup><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>-</m:r></span></i></m:sup></m:sSup><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r><m:r>OR</m:r><m:r>+1</m:r></span></i></m:den></m:f></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
 type="#_x0000_t75" style='width:193pt;height:25pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image027.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=193 height=25
src="ROC%20scale%20interp%2020191025.fld/image028.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]><span
style='mso-fareast-language:JA'><o:p></o:p></span></p>

<p ><!--[if gte msEquation 12]><m:oMathPara><m:oMath><m:sSup><m:sSupPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";mso-fareast-language:JA;font-style:
    italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>LR</m:r></span></i></m:e><m:sup><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>-</m:r></span></i></m:sup></m:sSup><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>≤</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>N</m:r></span></i><m:sSub><m:sSubPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>PV</m:r></span></i></m:e><m:sub><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>mingoal</m:r></span></i></m:sub></m:sSub></m:num><m:den><m:sSub><m:sSubPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>NPV</m:r></span></i></m:e><m:sub><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>mingoal</m:r></span></i></m:sub></m:sSub></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>1</m:r></span></i></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>OR</m:r></span></i></m:den></m:f></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
 type="#_x0000_t75" style='width:133pt;height:29pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image029.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=133 height=29
src="ROC%20scale%20interp%2020191025.fld/image030.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]></p>

<p ><o:p>&nbsp;</o:p></p>

<p >The equation shows that the slope through the origin, i.e. LR<sup>+</sup>,
must be at least as steep as the minimum goal <i>PPV</i>. In other words, the <i>region
of utility</i> (i.e. required range of <i>Sensitivity</i> and 1-<i>Specificity </i>for
a diagnostic test to be useful) resides on the top left corner triangle of the
ROC curve bound by the Y axis, the top edge (i.e. the Y=1 horizontal line), and
the line represented by <!--[if gte msEquation 12]><m:oMath><i
 style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>y</m:r><m:r>=</m:r></span></i><m:f><m:fPr><span
   style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
   mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
   normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><m:sSub><m:sSubPr><span
     style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
     mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
     normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
     normal'><span style='font-family:"Cambria Math",serif'><m:r>PPV</m:r></span></i></m:e><m:sub><i
     style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>mingoal</m:r></span></i></m:sub></m:sSub></m:num><m:den><i
   style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r></span></i><m:sSub><m:sSubPr><span
     style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
     mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
     normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
     normal'><span style='font-family:"Cambria Math",serif'><m:r>PPV</m:r></span></i></m:e><m:sub><i
     style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>mingoal</m:r></span></i></m:sub></m:sSub></m:den></m:f><i
 style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r></span></i><m:f><m:fPr><span
   style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
   mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
   normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
   normal'><span style='font-family:"Cambria Math",serif'><m:r>1</m:r></span></i></m:num><m:den><i
   style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>OR</m:r></span></i></m:den></m:f><i
 style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>x</m:r></span></i></m:oMath><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;position:relative;top:9.0pt;mso-text-raise:-9.0pt;
mso-ansi-language:EN-US;mso-fareast-language:ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape
 id="_x0000_i1025" type="#_x0000_t75" style='width:105pt;height:23pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image031.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=105 height=23
src="ROC%20scale%20interp%2020191025.fld/image032.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]>.
This condition dictates how strict the test threshold must be: a higher <i>Prevalence</i>
will raise <i>OR</i>, drop minimal required <i>LR<sup>+</sup>­</i>, and thus open
up the <i>region of utility</i>; a lower <i>Prevalence</i> will raise minimal
required <i>LR<sup>+</sup></i> and thus narrow down the <i>region</i>. It makes
sense conceptually: when disease prevalence is high, a test with relatively
high false (+) rate (i.e. mediocre specificity) may still manage to predict (+)
disease with a (+) result at a satisfactory rate (i.e. satisfactory PPV).</p>

<p >For <i>NPV</i>, the watershed line defining the <i>region of
utility</i> is drawn from the top right corner, bounded by the Y axis, the top
edge, and <!--[if gte msEquation 12]><m:oMath><i style='mso-bidi-font-style:
 normal'><span style='font-family:"Cambria Math",serif'><m:r>(</m:r><m:r>y</m:r><m:r>-</m:r><m:r>1)=</m:r></span></i><m:f><m:fPr><span
   style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
   mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
   normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
   normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>N</m:r></span></i><m:sSub><m:sSubPr><span
     style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
     mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
     normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
     normal'><span style='font-family:"Cambria Math",serif'><m:r>PV</m:r></span></i></m:e><m:sub><i
     style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>mingoal</m:r></span></i></m:sub></m:sSub></m:num><m:den><m:sSub><m:sSubPr><span
     style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
     mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
     normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
     normal'><span style='font-family:"Cambria Math",serif'><m:r>NPV</m:r></span></i></m:e><m:sub><i
     style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>mingoal</m:r></span></i></m:sub></m:sSub></m:den></m:f><i
 style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r></span></i><m:f><m:fPr><span
   style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
   mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
   normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
   normal'><span style='font-family:"Cambria Math",serif'><m:r>1</m:r></span></i></m:num><m:den><i
   style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>OR</m:r></span></i></m:den></m:f><i
 style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>(</m:r><m:r>x</m:r><m:r>-</m:r><m:r>1)</m:r></span></i></m:oMath><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;position:relative;top:9.0pt;mso-text-raise:-9.0pt;
mso-ansi-language:EN-US;mso-fareast-language:ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape
 id="_x0000_i1025" type="#_x0000_t75" style='width:163pt;height:23pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image033.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=163 height=23
src="ROC%20scale%20interp%2020191025.fld/image034.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]>.
This condition dictates how lenient the test threshold must be: a higher <i>Prevalence</i>
raises <i>OR</i>, restricting the maximum allowed LR<sup>-</sup>, narrowing
down the <i>region of utility</i>; a low <i>Prevalence</i> raises maximum
allowed LR<sup>-</sup>, opening up the <i>region</i>. Together with the rule on
<i>PPV</i>, the <i>region of utility</i> is restricted from both the lenient
and strict ends of test threshold.</p>

<p ><span style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape
 id="Picture_x0020_20" o:spid="_x0000_i1037" type="#_x0000_t75" style='width:155pt;
 height:155pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image035.jpg" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=155 height=155
src="ROC%20scale%20interp%2020191025.fld/image035.jpg" v:shapes="Picture_x0020_20"><![endif]></span><span
style='mso-fareast-language:JA;mso-no-proof:yes'><!--[if gte vml 1]><v:shape
 id="Picture_x0020_19" o:spid="_x0000_i1036" type="#_x0000_t75" style='width:153pt;
 height:153pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image036.jpg" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=153 height=153
src="ROC%20scale%20interp%2020191025.fld/image036.jpg" v:shapes="Picture_x0020_19"><![endif]></span><span
style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape id="Picture_x0020_25"
 o:spid="_x0000_i1035" type="#_x0000_t75" style='width:153pt;height:153pt;
 visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image037.jpg" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=153 height=153
src="ROC%20scale%20interp%2020191025.fld/image037.jpg" v:shapes="Picture_x0020_25"><![endif]></span></p>

<p ><span style='mso-fareast-language:JA'><o:p>&nbsp;</o:p></span></p>

<p ><span style='mso-fareast-language:JA'>Now that the <i>region
of utility</i> is declared, it must be determined whether a diagnostic test can
perform adequately within that region, and what threshold gives optimal
performance. Any portion of its ROC curve that resides within the <i>region of
utility</i> satisfies the LR<sup>+</sup> and LR<sup>-</sup> </span>slope
requirements. Some test may have no portion in the region despite having a
better performance characteristic overall. Within this portion, one must
determine which point is closest to the top left corner, (X, Y) = (0, 1). The
precise derivation depends on the exact shape of the ROC curve.</p>

<p ><span style='mso-fareast-language:JA'><o:p>&nbsp;</o:p></span></p>

<h2>TP/FP and FN/TN curves</h2>

<p >In the TP/FP version of ROC, the Y axis = A and X axis = B as
per the 2x2 matrix. Let us attempt to describe A as a function of B, <i>Sensitivity</i>,
<i>Specificity</i>, and <i>Prevalence</i>. First, we know that (A, B) and (C,
D) are each related by <i>PPV </i>= A/(A+B)<i> </i><span style='mso-bidi-font-style:
italic'>and </span><i style='mso-bidi-font-style:normal'>NPV</i><span
style='mso-bidi-font-style:italic'> = D/(C+D).</span> Switching around to <span
style='mso-bidi-font-style:italic'>isolate A and C:<o:p></o:p></span></p>

<p ><!--[if gte msEquation 12]><m:oMathPara><m:oMath><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>A</m:r><m:r>=</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>PPV</m:r></span></i></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>PPV</m:r></span></i></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r><m:r>B</m:r></span></i></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
 type="#_x0000_t75" style='width:79pt;height:25pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image038.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=79 height=25
src="ROC%20scale%20interp%2020191025.fld/image039.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]></p>

<p ><!--[if gte msEquation 12]><m:oMathPara><m:oMath><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>C</m:r><m:r>=</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>NPV</m:r></span></i></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>NPV</m:r></span></i></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r><m:r>D</m:r></span></i></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
 type="#_x0000_t75" style='width:81pt;height:25pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image040.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=81 height=25
src="ROC%20scale%20interp%2020191025.fld/image041.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]></p>

<p ><o:p>&nbsp;</o:p></p>

<p >Substitute <i>PPV</i> and <i>NPV </i>with the equation from
previous section: </p>

<p ><!--[if gte msEquation 12]><m:oMathPara><m:oMath><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>PPV</m:r></span></i></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>PPV</m:r></span></i></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>=</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><m:f><m:fPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><m:sSup><m:sSupPr><span
        style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
        mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
        normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i
        style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>LR</m:r></span></i></m:e><m:sup><i
        style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i></m:sup></m:sSup></m:num><m:den><m:sSup><m:sSupPr><span
        style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
        mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
        normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i
        style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>LR</m:r></span></i></m:e><m:sup><i
        style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i></m:sup></m:sSup><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i><m:f><m:fPr><span
        style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
        mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
        normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
        normal'><span style='font-family:"Cambria Math",serif'><m:r>1</m:r></span></i></m:num><m:den><i
        style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>OR</m:r></span></i></m:den></m:f></m:den></m:f></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r></span></i><m:f><m:fPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><m:sSup><m:sSupPr><span
        style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
        mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
        normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i
        style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>LR</m:r></span></i></m:e><m:sup><i
        style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i></m:sup></m:sSup></m:num><m:den><m:sSup><m:sSupPr><span
        style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
        mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
        normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i
        style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>LR</m:r></span></i></m:e><m:sup><i
        style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i></m:sup></m:sSup><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i><m:f><m:fPr><span
        style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
        mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
        normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
        normal'><span style='font-family:"Cambria Math",serif'><m:r>1</m:r></span></i></m:num><m:den><i
        style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>OR</m:r></span></i></m:den></m:f></m:den></m:f></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>=</m:r></span></i><m:sSup><m:sSupPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>LR</m:r></span></i></m:e><m:sup><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i></m:sup></m:sSup><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r><m:r>OR</m:r></span></i></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
 type="#_x0000_t75" style='width:182pt;height:69pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image042.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=182 height=69
src="ROC%20scale%20interp%2020191025.fld/image043.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]></p>

<p ><!--[if gte msEquation 12]><m:oMathPara><m:oMath><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>NPV</m:r></span></i></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>NPV</m:r></span></i></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>=</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><m:f><m:fPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><m:sSup><m:sSupPr><span
        style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
        mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
        normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i
        style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>LR</m:r></span></i></m:e><m:sup><i
        style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>-</m:r></span></i></m:sup></m:sSup><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r><m:r>OR</m:r></span></i></m:num><m:den><m:sSup><m:sSupPr><span
        style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
        mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
        normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i
        style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>LR</m:r></span></i></m:e><m:sup><i
        style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>-</m:r></span></i></m:sup></m:sSup><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r><m:r>OR</m:r><m:r>+1</m:r></span></i></m:den></m:f></m:num><m:den><m:f><m:fPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>1</m:r></span></i></m:num><m:den><m:sSup><m:sSupPr><span
        style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
        mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
        normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i
        style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>LR</m:r></span></i></m:e><m:sup><i
        style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>-</m:r></span></i></m:sup></m:sSup><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r><m:r>OR</m:r><m:r>+1</m:r></span></i></m:den></m:f></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>=</m:r></span></i><m:sSup><m:sSupPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>LR</m:r></span></i></m:e><m:sup><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>-</m:r></span></i></m:sup></m:sSup><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r><m:r>OR</m:r></span></i><br>
 </m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span style='font-size:
11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:minor-latin;
mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
 type="#_x0000_t75" style='width:180pt;height:45pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image044.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=180 height=45
src="ROC%20scale%20interp%2020191025.fld/image045.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]>Plugging
this “slope” term into the end of the above equation:</p>

<p ><!--[if gte msEquation 12]><m:oMathPara><m:oMath><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>A</m:r><m:r>=</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>PPV</m:r></span></i></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>PPV</m:r></span></i></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r><m:r>B</m:r><m:r>=</m:r></span></i><m:sSup><m:sSupPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>LR</m:r></span></i></m:e><m:sup><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i></m:sup></m:sSup><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r><m:r>OR</m:r><m:r>*</m:r><m:r>B</m:r><m:r>=</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>Sensitivity</m:r></span></i></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>Specificity</m:r></span></i></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>Prevalence</m:r></span></i></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>Prevalence</m:r></span></i></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r><m:r>B</m:r></span></i></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
 type="#_x0000_t75" style='width:347pt;height:27pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image046.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=347 height=27
src="ROC%20scale%20interp%2020191025.fld/image047.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]></p>

<p ><!--[if gte msEquation 12]><m:oMathPara><m:oMath><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>C</m:r><m:r>=</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>NPV</m:r></span></i></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>NPV</m:r></span></i></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r><m:r>D</m:r><m:r>=</m:r></span></i><m:sSup><m:sSupPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>LR</m:r></span></i></m:e><m:sup><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>-</m:r></span></i></m:sup></m:sSup><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r><m:r>OR</m:r><m:r>*</m:r><m:r>D</m:r><m:r>=</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>Sensitivity</m:r></span></i></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>Specificity</m:r></span></i></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>Prevalence</m:r></span></i></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>Prevalence</m:r></span></i></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r><m:r>D</m:r></span></i></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
 type="#_x0000_t75" style='width:349pt;height:27pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image048.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=349 height=27
src="ROC%20scale%20interp%2020191025.fld/image049.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]></p>

<p ><o:p>&nbsp;</o:p></p>

<p >These forms are ready for experiments with tweaking the test
threshold or disease prevalence one dimension at a time.</p>

<h3>Experiment: tweak the <i>LR </i>terms</h3>

<p >The likelihood ratios are completely dependent on the test
threshold and independent of disease prevalence. This term also happens to be
the slope that each connects (X,Y) = (0,0) or (1,1) and the specific coordinate
along the Sens/Spec ROC curve.<span style='mso-no-proof:yes'><o:p></o:p></span></p>

<p ><o:p>&nbsp;</o:p></p>

<p >Suppose that the threshold is made the most lenient, such
that all patients test (+) regardless of disease status. Then <i>Sensitivity</i>=1,
<i>Specificity</i>=0, plotted @ the top right corner of this graph. At the same
time, this condition renders the TP vs FP (i.e. A vs B) relation as:</p>

<p ><!--[if gte msEquation 12]><m:oMathPara><m:oMath><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>A</m:r><m:r>=</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>1</m:r></span></i></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1</m:r></span></i></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>Prevalence</m:r></span></i></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>Prevalence</m:r></span></i></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r><m:r>B</m:r><m:r>=</m:r><m:r>OR</m:r><m:r>*</m:r><m:r>B</m:r></span></i></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
 type="#_x0000_t75" style='width:177pt;height:25pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image050.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=177 height=25
src="ROC%20scale%20interp%2020191025.fld/image051.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]></p>

<p >Therefore, at the most lenient threshold, A becomes a
function of B and prevalence alone.<span style='mso-fareast-language:JA'><o:p></o:p></span></p>

<p >Any stricter threshold renders the LR<sup>+</sup> term ≥ 1,
as evidenced by how the slope steepens from line C to the blue line to the red
line on the ROC curve above. The slope of the formula A as a function of B will
be multiplied by this factor, rendering this slope steeper given unchanged <i>Prevalence</i>.</p>

<table  border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0in 5.4pt 0in 5.4pt'>
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
  <td width=102 valign=top style='width:76.25pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><o:p>&nbsp;</o:p></p>
  </td>
  <td width=252 valign=top style='width:189.0pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p >Strictest threshold</p>
  </td>
  <td width=257 valign=top style='width:193.0pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p >Most lenient threshold</p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1'>
  <td width=102 valign=top style='width:76.25pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p >A as a function of B</p>
  </td>
  <td width=252 valign=top style='width:189.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p >A=0, B=0</p>
  </td>
  <td width=257 valign=top style='width:193.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><!--[if gte msEquation 12]><m:oMathPara><m:oMath><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>A</m:r><m:r>=</m:r></span></i><m:f><m:fPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>1</m:r></span></i></m:num><m:den><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1</m:r></span></i></m:den></m:f><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r></span></i><m:f><m:fPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>Prevalence</m:r></span></i></m:num><m:den><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>Prevalence</m:r></span></i></m:den></m:f><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r><m:r>B</m:r><m:r>=</m:r><m:r>OR</m:r><m:r>*</m:r><m:r>B</m:r></span></i></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
  style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
  mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
  mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
  ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
   type="#_x0000_t75" style='width:177pt;height:25pt'>
   <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image052.emz" o:title=""
    chromakey="white"/>
  </v:shape><![endif]--><![if !vml]><img width=177 height=25
  src="ROC%20scale%20interp%2020191025.fld/image051.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2;mso-yfti-lastrow:yes'>
  <td width=102 valign=top style='width:76.25pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p >C as a function of D </p>
  </td>
  <td width=252 valign=top style='width:189.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><!--[if gte msEquation 12]><m:oMathPara><m:oMath><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>C</m:r><m:r>=</m:r></span></i><m:f><m:fPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>1</m:r></span></i></m:num><m:den><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1</m:r></span></i></m:den></m:f><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r></span></i><m:f><m:fPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>Prevalence</m:r></span></i></m:num><m:den><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>Prevalence</m:r></span></i></m:den></m:f><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r><m:r>D</m:r><m:r>=</m:r><m:r>OR</m:r><m:r>*</m:r><m:r>D</m:r></span></i></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
  style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
  mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
  mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
  ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
   type="#_x0000_t75" style='width:178pt;height:25pt'>
   <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image053.emz" o:title=""
    chromakey="white"/>
  </v:shape><![endif]--><![if !vml]><img width=178 height=25
  src="ROC%20scale%20interp%2020191025.fld/image054.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]></p>
  </td>
  <td width=257 valign=top style='width:193.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p >C=0, D=0</p>
  </td>
 </tr>
</table>

<p ><o:p>&nbsp;</o:p></p>

<h3>Experiment: tweak the <i>Prevalence</i> (or <i>OR</i>) at maximally lenient
threshold</h3>

<p >Given that the A vs B relationship at the most lenient test
threshold is dependent only on <i>Prevalence </i>i.e. on <i>OR</i>, let us see
how it changes with <i>Prevalence</i>. <span style='mso-fareast-language:JA'>At
the same time, since all tests return (+), C and D in the 2x2 matrix are both
=0. Therefore, A+B=1, i.e. A = -B+1. With 2 variables and 2 relations, it is
possible to find out the values of A and B, which are tabulated below.<o:p></o:p></span></p>

<table  border=1 cellspacing=0 cellpadding=0 width=631
 style='width:473.15pt;border-collapse:collapse;border:none;mso-border-alt:
 solid windowtext .5pt;mso-yfti-tbllook:1184;mso-padding-alt:0in 5.4pt 0in 5.4pt'>
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
  <td width=236 valign=top style='width:177.35pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><i><span style='mso-fareast-language:JA'>Prevalence</span></i><span
  style='mso-fareast-language:JA'> <o:p></o:p></span></p>
  </td>
  <td width=76 valign=top style='width:56.9pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><span style='mso-fareast-language:JA'>0%<o:p></o:p></span></p>
  </td>
  <td width=82 valign=top style='width:61.15pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><span style='mso-fareast-language:JA'>33%<o:p></o:p></span></p>
  </td>
  <td width=80 valign=top style='width:59.7pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><span style='mso-fareast-language:JA'>50%<o:p></o:p></span></p>
  </td>
  <td width=82 valign=top style='width:61.15pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><span style='mso-fareast-language:JA'>67%<o:p></o:p></span></p>
  </td>
  <td width=76 valign=top style='width:56.9pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><span style='mso-fareast-language:JA'>100%<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1;height:22.45pt'>
  <td width=236 valign=top style='width:177.35pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0in 5.4pt 0in 5.4pt;height:22.45pt'>
  <p  style='tab-stops:right 166.55pt'><span style='mso-fareast-language:
  JA'>Slope =</span> <!--[if gte msEquation 12]><m:oMath><m:f><m:fPr><span
     style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
     mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
     normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
     normal'><span style='font-family:"Cambria Math",serif'><m:r>Prevalence</m:r></span></i></m:num><m:den><i
     style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>Prevalence</m:r></span></i></m:den></m:f></m:oMath><![endif]--><![if !msEquation]><span
  style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
  mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
  mso-bidi-theme-font:minor-bidi;position:relative;top:6.0pt;mso-text-raise:
  -6.0pt;mso-ansi-language:EN-US;mso-fareast-language:ZH-TW;mso-bidi-language:
  AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025" type="#_x0000_t75"
   style='width:55pt;height:19pt'>
   <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image055.emz" o:title=""
    chromakey="white"/>
  </v:shape><![endif]--><![if !vml]><img width=55 height=19
  src="ROC%20scale%20interp%2020191025.fld/image056.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]><span
  style='mso-spacerun:yes'> </span>= <i>OR<o:p></o:p></i></p>
  </td>
  <td width=76 valign=top style='width:56.9pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt;height:22.45pt'>
  <p ><span style='mso-fareast-language:JA'>0<o:p></o:p></span></p>
  </td>
  <td width=82 valign=top style='width:61.15pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt;height:22.45pt'>
  <p ><span style='mso-fareast-language:JA'>1/2<o:p></o:p></span></p>
  </td>
  <td width=80 valign=top style='width:59.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt;height:22.45pt'>
  <p ><span style='mso-fareast-language:JA'>1<o:p></o:p></span></p>
  </td>
  <td width=82 valign=top style='width:61.15pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt;height:22.45pt'>
  <p ><span style='mso-fareast-language:JA'>2<o:p></o:p></span></p>
  </td>
  <td width=76 valign=top style='width:56.9pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt;height:22.45pt'>
  <p ><span style='font-family:"Times New Roman",serif;
  mso-fareast-font-family:"Times New Roman";mso-fareast-language:JA'>∞<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2'>
  <td width=236 valign=top style='width:177.35pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p ><span style='mso-fareast-language:JA'>A = True Positive
  rate (Y axis) = <i>Prevalence</i> (=A+C) when C = 0<o:p></o:p></span></p>
  </td>
  <td width=76 valign=top style='width:56.9pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><span style='mso-fareast-language:JA'>0 = 0%<o:p></o:p></span></p>
  </td>
  <td width=82 valign=top style='width:61.15pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><span style='mso-fareast-language:JA'>1/3 = 33%<o:p></o:p></span></p>
  </td>
  <td width=80 valign=top style='width:59.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><span style='mso-fareast-language:JA'>0.5 = 50%<o:p></o:p></span></p>
  </td>
  <td width=82 valign=top style='width:61.15pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><span style='mso-fareast-language:JA'>2/3 = 67%<o:p></o:p></span></p>
  </td>
  <td width=76 valign=top style='width:56.9pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><span style='mso-fareast-language:JA'>1 = 100%<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:3;mso-yfti-lastrow:yes'>
  <td width=236 valign=top style='width:177.35pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p ><span style='mso-fareast-language:JA'>B = False Positive
  rate (X axis) = 1-<i>Prevalence</i> (=B+D) when D = 0<o:p></o:p></span></p>
  </td>
  <td width=76 valign=top style='width:56.9pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><span style='mso-fareast-language:JA'>1 = 100%<o:p></o:p></span></p>
  </td>
  <td width=82 valign=top style='width:61.15pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><span style='mso-fareast-language:JA'>2/3 = 67%<o:p></o:p></span></p>
  </td>
  <td width=80 valign=top style='width:59.7pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><span style='mso-fareast-language:JA'>0.5 = 50%<o:p></o:p></span></p>
  </td>
  <td width=82 valign=top style='width:61.15pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><span style='mso-fareast-language:JA'>1/3 = 33%<o:p></o:p></span></p>
  </td>
  <td width=76 valign=top style='width:56.9pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><span style='mso-fareast-language:JA'>0 = 0%<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p ><span style='color:white;mso-color-alt:windowtext;
mso-fareast-language:JA'>The </span><span style='mso-fareast-language:JA'>same relations
are expressed on the new ROC curve below, now with TP rate on Y axis and FP
rate on X axis. The A and B at prevalence 33%, 50%, and 67% are represented as green
circles on the intersection between A=<i>OR</i>*B</span> and A=-B+1.<span
style='mso-fareast-language:JA'><o:p></o:p></span></p>

<p ><span style='mso-fareast-language:JA'><o:p>&nbsp;</o:p></span></p>

<p ><span style='mso-fareast-language:JA'>Remembering from the
previous section that restricting the threshold </span>while keeping <i>Prevalence</i>
constant<span style='mso-fareast-language:JA'> steepens the slope of </span><!--[if gte msEquation 12]><m:oMath><i
 style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
 mso-fareast-language:JA'><m:r>A</m:r></span></i><i style='mso-bidi-font-style:
 normal'><span style='font-family:"Cambria Math",serif'><m:r>=</m:r></span></i><m:sSup><m:sSupPr><span
   style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
   mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
   normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i style='mso-bidi-font-style:
   normal'><span style='font-family:"Cambria Math",serif'><m:r>LR</m:r></span></i></m:e><m:sup><i
   style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i></m:sup></m:sSup><i
 style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r><m:r>OR</m:r><m:r>*</m:r><m:r>B</m:r></span></i></m:oMath><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;position:relative;top:2.0pt;mso-text-raise:-2.0pt;
mso-ansi-language:EN-US;mso-fareast-language:ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape
 id="_x0000_i1025" type="#_x0000_t75" style='width:84pt;height:13pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image057.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=84 height=13
src="ROC%20scale%20interp%2020191025.fld/image058.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]>,
this can be represented on the graph as a <i>TP/FP region of possible slopes</i>,
defined as the area covered by this equation with slope varying from <i>OR</i> to
∞:</p>

<table  border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0in 5.4pt 0in 5.4pt'>
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
  <td width=208 valign=top style='width:155.8pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><span style='mso-fareast-language:JA;mso-no-proof:yes'><!--[if gte vml 1]><v:shape
   id="Picture_x0020_15" o:spid="_x0000_i1034" type="#_x0000_t75" style='width:142pt;
   height:137pt;visibility:visible;mso-wrap-style:square'>
   <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image059.jpg" o:title=""/>
  </v:shape><![endif]--><![if !vml]><img border=0 width=142 height=137
  src="ROC%20scale%20interp%2020191025.fld/image059.jpg" v:shapes="Picture_x0020_15"><![endif]></span><span
  style='mso-fareast-language:JA'><o:p></o:p></span></p>
  </td>
  <td width=208 valign=top style='width:155.85pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><span style='mso-fareast-language:JA;mso-no-proof:yes'><!--[if gte vml 1]><v:shape
   id="Picture_x0020_16" o:spid="_x0000_i1033" type="#_x0000_t75" style='width:142pt;
   height:137pt;visibility:visible;mso-wrap-style:square'>
   <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image060.jpg" o:title=""/>
  </v:shape><![endif]--><![if !vml]><img border=0 width=142 height=137
  src="ROC%20scale%20interp%2020191025.fld/image060.jpg" v:shapes="Picture_x0020_16"><![endif]></span><span
  style='mso-fareast-language:JA'><o:p></o:p></span></p>
  </td>
  <td width=208 valign=top style='width:155.85pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><span style='mso-fareast-language:JA;mso-no-proof:yes'><!--[if gte vml 1]><v:shape
   id="Picture_x0020_17" o:spid="_x0000_i1032" type="#_x0000_t75" style='width:142pt;
   height:137pt;visibility:visible;mso-wrap-style:square'>
   <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image061.jpg" o:title=""/>
  </v:shape><![endif]--><![if !vml]><img border=0 width=142 height=137
  src="ROC%20scale%20interp%2020191025.fld/image061.jpg" v:shapes="Picture_x0020_17"><![endif]></span><span
  style='mso-fareast-language:JA'><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes'>
  <td width=208 valign=top style='width:155.8pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0in 5.4pt 0in 5.4pt'>
  <p ><span style='mso-fareast-language:JA'>TP/FP region of possible
  slopes at prevalence 67% i.e. OR=2<o:p></o:p></span></p>
  </td>
  <td width=208 valign=top style='width:155.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><span style='mso-fareast-language:JA'>TP/FP region of possible
  slopes at prevalence 50% i.e. OR=1<o:p></o:p></span></p>
  </td>
  <td width=208 valign=top style='width:155.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><span style='mso-fareast-language:JA'>TP/FP region of possible
  slopes at prevalence 33% i.e. OR=1/2<o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p ><span style='mso-fareast-language:JA'>What this region of possible
slopes does not represent is exactly where TP and FP are. Is it possible to
figure out the exact TP &amp; FP other than at the most lenient threshold (the green
circles)? Yes, and this is where plots on the other ROC curve definition fits
in.<o:p></o:p></span></p>

<h3><span style='mso-fareast-language:JA'>Overlay the Sens/Spec curve on TP/FP
curve<o:p></o:p></span></h3>

<p ><span style='mso-fareast-language:JA'>On the TP/FP ROC
curve, Y axis = TP = A; X axis = FP = B.<o:p></o:p></span></p>

<p ><span style='mso-fareast-language:JA'>On the Sens/Spec ROC
curve, Y axis = <i>Sensitivity</i> = A/(A+C); X axis = (1-<i>Specificity</i>) =
B/(B+D). In other words, Y axis = Sensitivity = A/<i>Prevalence</i>; X axis =
B/(1-<i>Prevalence</i>).<o:p></o:p></span></p>

<p ><span style='mso-fareast-language:JA'><o:p>&nbsp;</o:p></span></p>

<p ><span style='mso-fareast-language:JA'>Therefore, in reverse,
the Y value of the TP/FP ROC curve is the Y value of the Sens/Spec ROC curve
times <i>Prevalence</i>; the X value of the TP/FP ROC curve is the X value of
the Sens/Spec ROC curve times (1-<i>Prevalence</i>). On the coordinates, this appears
as vertical and horizontal axial compressions: both Y and X values shrink
because they are multiplied with a positive value ≤1.<o:p></o:p></span></p>

<p ><span style='mso-fareast-language:JA'><o:p>&nbsp;</o:p></span></p>

<p ><span style='mso-fareast-language:JA'>At the top right
corner of the Sens/Spec ROC curve, i.e. where the threshold is infinitely
lenient, the compressed coordinate matches the green dots. At the bottom left
of the Sens/Spec ROC curve, i.e. where the threshold is infinitely strict, the
compressed coordinate matches the origin (0, 0). Putting these concepts
together, below are the same ROC curve at Prevalence of 76%, 50%, and 33%:<o:p></o:p></span></p>

<p ><span style='mso-fareast-language:JA;mso-no-proof:yes'><!--[if gte vml 1]><v:shape
 id="Picture_x0020_21" o:spid="_x0000_i1031" type="#_x0000_t75" style='width:145pt;
 height:141pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image062.jpg" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=145 height=141
src="ROC%20scale%20interp%2020191025.fld/image062.jpg" v:shapes="Picture_x0020_21"><![endif]></span><span
style='mso-fareast-language:JA'><span style='mso-spacerun:yes'> </span><span
style='mso-no-proof:yes'><!--[if gte vml 1]><v:shape id="Picture_x0020_22"
 o:spid="_x0000_i1030" type="#_x0000_t75" style='width:145pt;height:141pt;
 visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image063.jpg" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=145 height=141
src="ROC%20scale%20interp%2020191025.fld/image063.jpg" v:shapes="Picture_x0020_22"><![endif]><!--[if gte vml 1]><v:shape
 id="Picture_x0020_23" o:spid="_x0000_i1029" type="#_x0000_t75" style='width:2in;
 height:140pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image064.jpg" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=144 height=140
src="ROC%20scale%20interp%2020191025.fld/image064.jpg" v:shapes="Picture_x0020_23"><![endif]></span><o:p></o:p></span></p>

<p ><span style='mso-fareast-language:JA'>Note that the red and
blue dots each represent the same test result thresholds. One can appreciate how
differently the dots are located depending on prevalence, i.e. depending on
where along the gray line to fit the top right corner of the curve.<o:p></o:p></span></p>

<p ><span style='mso-fareast-language:JA'><o:p>&nbsp;</o:p></span></p>

<p ><span style='mso-fareast-language:JA'>One may also
appreciate how the optimal test threshold depends on prevalence. The top left
corner at (X, Y) = (FP, TP) = (0, 1) is always the ideal test result, which is
simply not achievable with disease prevalence &lt;1 and overlapping result histograms.
However, the optimal point can still be defined as the point on the ROC curve
that is closest to (X, Y) = (0, 1). The precise derivation of optimal point is beyond
the scope as it requires knowing the specific test result histograms.
Conceptually, one can imagine an expanding circle centered on (X, Y) = (0, 1),
with the point that it touches first on the black curve being closest to (0, 1)
and hence optimal. That point is much closer to the blue dot when <i>Prevalence</i>
= 67% than when <i style='mso-bidi-font-style:normal'>Prevalence</i><span
style='mso-bidi-font-style:italic'> = </span>50%, and closer to the red circle
when <i>Prevalence</i> = 33%.<o:p></o:p></span></p>

<h3><span style='mso-fareast-language:JA'>Fitting in the <i>region of utility</i>
in this coordinate<o:p></o:p></span></h3>

<p ><span style='mso-fareast-language:JA'>On the Sens/Spec ROC,<o:p></o:p></span></p>

<p ><!--[if gte msEquation 12]><m:oMathPara><m:oMath><m:sSup><m:sSupPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>LR</m:r></span></i></m:e><m:sup><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i></m:sup></m:sSup><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>≥</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><m:sSub><m:sSubPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>PPV</m:r></span></i></m:e><m:sub><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>mingoal</m:r></span></i></m:sub></m:sSub></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r></span></i><m:sSub><m:sSubPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>PPV</m:r></span></i></m:e><m:sub><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>mingoal</m:r></span></i></m:sub></m:sSub></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>1</m:r></span></i></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>OR</m:r></span></i></m:den></m:f></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
 type="#_x0000_t75" style='width:131pt;height:29pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image065.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=131 height=29
src="ROC%20scale%20interp%2020191025.fld/image026.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]></p>

<p ><!--[if gte msEquation 12]><m:oMathPara><m:oMath><m:sSup><m:sSupPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";mso-fareast-language:JA;font-style:
    italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>LR</m:r></span></i></m:e><m:sup><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>-</m:r></span></i></m:sup></m:sSup><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>≤</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>N</m:r></span></i><m:sSub><m:sSubPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>PV</m:r></span></i></m:e><m:sub><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>mingoal</m:r></span></i></m:sub></m:sSub></m:num><m:den><m:sSub><m:sSubPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>NPV</m:r></span></i></m:e><m:sub><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>mingoal</m:r></span></i></m:sub></m:sSub></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>1</m:r></span></i></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>OR</m:r></span></i></m:den></m:f></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
 type="#_x0000_t75" style='width:133pt;height:29pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image066.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=133 height=29
src="ROC%20scale%20interp%2020191025.fld/image030.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]></p>

<p ><o:p>&nbsp;</o:p></p>

<p >To transform this relationship to the TP/FP coordinate, take
the axis compression into account:</p>

<p ><!--[if gte msEquation 12]><m:oMathPara><m:oMath><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>slope</m:r><m:r>=</m:r></span></i><m:sSup><m:sSupPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>LR</m:r></span></i></m:e><m:sup><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i></m:sup></m:sSup><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r><m:r>OR</m:r><m:r>≥</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><m:sSub><m:sSubPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>PPV</m:r></span></i></m:e><m:sub><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>mingoal</m:r></span></i></m:sub></m:sSub></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r></span></i><m:sSub><m:sSubPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>PPV</m:r></span></i></m:e><m:sub><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>mingoal</m:r></span></i></m:sub></m:sSub></m:den></m:f></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
 type="#_x0000_t75" style='width:172pt;height:29pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image067.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=172 height=29
src="ROC%20scale%20interp%2020191025.fld/image068.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]></p>

<p ><!--[if gte msEquation 12]><m:oMathPara><m:oMath><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>slope</m:r><m:r>=</m:r></span></i><m:sSup><m:sSupPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>LR</m:r></span></i></m:e><m:sup><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>-</m:r></span></i></m:sup></m:sSup><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r><m:r>OR</m:r><m:r>≤</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>N</m:r></span></i><m:sSub><m:sSubPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>PV</m:r></span></i></m:e><m:sub><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>mingoal</m:r></span></i></m:sub></m:sSub></m:num><m:den><m:sSub><m:sSubPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>NPV</m:r></span></i></m:e><m:sub><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>mingoal</m:r></span></i></m:sub></m:sSub></m:den></m:f></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
 type="#_x0000_t75" style='width:173pt;height:29pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image069.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=173 height=29
src="ROC%20scale%20interp%2020191025.fld/image070.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]></p>

<p ><o:p>&nbsp;</o:p></p>

<p ><span style='mso-fareast-language:JA'>Thus, </span>the area
left of the <span style='mso-fareast-language:JA'>slope </span><!--[if gte msEquation 12]><m:oMath><i
 style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
 mso-fareast-language:JA'><m:r>y</m:r><m:r>=</m:r></span></i><m:f><m:fPr><span
   style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
   mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
   normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><m:sSub><m:sSubPr><span
     style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
     mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
     normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
     normal'><span style='font-family:"Cambria Math",serif'><m:r>PPV</m:r></span></i></m:e><m:sub><i
     style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>mingoal</m:r></span></i></m:sub></m:sSub></m:num><m:den><i
   style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r></span></i><m:sSub><m:sSubPr><span
     style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
     mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
     normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
     normal'><span style='font-family:"Cambria Math",serif'><m:r>PPV</m:r></span></i></m:e><m:sub><i
     style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>mingoal</m:r></span></i></m:sub></m:sSub></m:den></m:f><i
 style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>x</m:r></span></i></m:oMath><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;position:relative;top:9.0pt;mso-text-raise:-9.0pt;
mso-ansi-language:EN-US;mso-fareast-language:ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape
 id="_x0000_i1025" type="#_x0000_t75" style='width:84pt;height:23pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image071.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=84 height=23
src="ROC%20scale%20interp%2020191025.fld/image072.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]><span
style='mso-spacerun:yes'> </span>is defined as the <i>TP/FP</i> <i>region of
utility</i>. Minimal possible PPV is = <i>Prevalence</i> @ most lenient
threshold <span style='font-family:Wingdings;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin;mso-char-type:symbol;mso-symbol-font-family:Wingdings'><span
style='mso-char-type:symbol;mso-symbol-font-family:Wingdings'></span></span> maximal
possible PPV is 1 @ strictest threshold, rendering the minimal possible slope
for a given <i>Prevalence</i> (ignoring the <i>PPV<sub>mingoal</sub></i>) to be<i>
</i>the same as the green lines. In other word, if one arbitrarily selects a
minimal goal PPV that is smaller than the <i>Prevalence</i> in one’s target
population, one might as well not set a goal, and feel free to select the
globally optimal point on the ROC.</p>

<p ><o:p>&nbsp;</o:p></p>

<p >When drawing the slope corresponding to minimal goal PPV,
one can appreciate that having a high <i>Prevalence</i> leaves a greater
portion of the ROC curve on the left side of the minimal goal PPV slope. Thus,
it allows a greater range of thresholds, including the more lenient ones. This
is the same conclusion as in the experiment on the Sens/Spec ROC curve.</p>

<p ><span style='mso-fareast-language:JA;mso-no-proof:yes'><!--[if gte vml 1]><v:shape
 id="Picture_x0020_29" o:spid="_x0000_i1028" type="#_x0000_t75" style='width:156pt;
 height:156pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image073.jpg" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=156 height=156
src="ROC%20scale%20interp%2020191025.fld/image073.jpg" v:shapes="Picture_x0020_29"><![endif]><!--[if gte vml 1]><v:shape
 id="Picture_x0020_28" o:spid="_x0000_i1027" type="#_x0000_t75" style='width:155pt;
 height:155pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image074.jpg" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=155 height=155
src="ROC%20scale%20interp%2020191025.fld/image074.jpg" v:shapes="Picture_x0020_28"><![endif]><span
style='mso-spacerun:yes'> </span><!--[if gte vml 1]><v:shape id="Picture_x0020_27"
 o:spid="_x0000_i1026" type="#_x0000_t75" style='width:152pt;height:152pt;
 visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image075.jpg" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=152 height=152
src="ROC%20scale%20interp%2020191025.fld/image075.jpg" v:shapes="Picture_x0020_27"><![endif]><o:p></o:p></span></p>

<p ><span style='mso-fareast-language:JA'><o:p>&nbsp;</o:p></span></p>

<p ><span style='mso-fareast-language:JA'><o:p>&nbsp;</o:p></span></p>

<p ><b><span style='background:fuchsia;mso-highlight:fuchsia;
mso-fareast-language:JA'>Question</span></b><span style='background:fuchsia;
mso-highlight:fuchsia;mso-fareast-language:JA'> when should (<i>Sensitivity</i>,
<i>Specificity</i>) vs (<i>TP</i>, 1-<i>FP</i>) be optimized?</span><span
style='mso-fareast-language:JA'><o:p></o:p></span></p>

<h2><span style='mso-fareast-language:JA'>Picking a PPV based on pre-test OR
and desired post-test OR<o:p></o:p></span></h2>

<p ><span style='mso-fareast-language:JA'>When one wants to
raise the post-test disease odds ratio to a certain percentage provided a known
disease prevalence, one must satisfy LR<sup>+</sup><sub> </sub>via this formula:<o:p></o:p></span></p>

<p ><span style='mso-fareast-language:JA'>Post-test OR<sup>+</sup>
= Pre-test OR * LR<sup>+<o:p></o:p></sup></span></p>

<p ><span style='mso-fareast-language:JA'>Post-test OR<sup>-</sup>
= Pre-test OR * LR<sup>­-<o:p></o:p></sup></span></p>

<p ><b><span style='mso-fareast-language:JA'>Derivation</span></b><span
style='mso-fareast-language:JA'>: <o:p></o:p></span></p>

<p ><span style='mso-fareast-language:JA'>For OR<sup>+</sup>:<o:p></o:p></span></p>

<p  style='text-indent:-.25in;mso-list:l0 level1 lfo1'><![if !supportLists]><span
style='mso-ascii-font-family:Calibri;mso-fareast-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:Calibri;mso-fareast-language:
JA'><span style='mso-list:Ignore'>-<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='mso-fareast-language:JA'>Chance of
testing (+) in a randomly picked person = chance of true (+) + chance of false
(+) = Odds numerator * Sens + Odds denominator * (1-Spec)<o:p></o:p></span></p>

<p  style='text-indent:-.25in;mso-list:l0 level1 lfo1'><![if !supportLists]><span
style='mso-ascii-font-family:Calibri;mso-fareast-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:Calibri;mso-fareast-language:
JA'><span style='mso-list:Ignore'>-<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='mso-fareast-language:JA'>Given a
(+) test, Post-test Odds of having disease / no disease = </span><!--[if gte msEquation 12]><m:oMath><m:f><m:fPr><span
   style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
   mso-hansi-font-family:"Cambria Math";mso-fareast-language:JA;font-style:
   italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i
   style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
   mso-fareast-language:JA'><m:r>Pre</m:r><m:r>-</m:r><m:r>test</m:r><m:r> </m:r><m:r>Odds</m:r><m:r>
    </m:r><m:r>numerator</m:r><m:r>*</m:r><m:r>Sens</m:r></span></i></m:num><m:den><i
   style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
   mso-fareast-language:JA'><m:r>Pre</m:r><m:r>-</m:r><m:r>test</m:r><m:r> </m:r><m:r>Odds</m:r><m:r>
    </m:r><m:r>denominator</m:r><m:r>*</m:r><m:r>(1-</m:r><m:r>Spec</m:r><m:r>)</m:r></span></i></m:den></m:f><i
 style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
 mso-fareast-language:JA'><m:r>=</m:r></span></i><m:sSub><m:sSubPr><span
   style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
   mso-hansi-font-family:"Cambria Math";mso-fareast-language:JA;font-style:
   italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i
   style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
   mso-fareast-language:JA'><m:r>OR</m:r></span></i></m:e><m:sub><i
   style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
   mso-fareast-language:JA'><m:r>pretest</m:r></span></i></m:sub></m:sSub><i
 style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
 mso-fareast-language:JA'><m:r>*</m:r></span></i><m:sSup><m:sSupPr><span
   style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
   mso-hansi-font-family:"Cambria Math";mso-fareast-language:JA;font-style:
   italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i
   style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
   mso-fareast-language:JA'><m:r>LR</m:r></span></i></m:e><m:sup><i
   style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
   mso-fareast-language:JA'><m:r>+</m:r></span></i></m:sup></m:sSup></m:oMath><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;position:relative;top:7.0pt;mso-text-raise:-7.0pt;
mso-ansi-language:EN-US;mso-fareast-language:ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape
 id="_x0000_i1025" type="#_x0000_t75" style='width:238pt;height:21pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image076.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=238 height=21
src="ROC%20scale%20interp%2020191025.fld/image077.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]><span
style='mso-fareast-language:JA'><span style='mso-spacerun:yes'> </span><o:p></o:p></span></p>

<p ><span style='mso-fareast-language:JA'>For OR<sup>-</sup>:<o:p></o:p></span></p>

<p  style='text-indent:-.25in;mso-list:l0 level1 lfo1'><![if !supportLists]><span
style='mso-ascii-font-family:Calibri;mso-fareast-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:Calibri;mso-fareast-language:
JA'><span style='mso-list:Ignore'>-<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='mso-fareast-language:JA'>Chance of
testing (-) in a randomly picked person = chance of false (-) + chance of true
(-) = Odds numerator *(1-Sens) + Odds denominator * Spec<o:p></o:p></span></p>

<p  style='text-indent:-.25in;mso-list:l0 level1 lfo1'><![if !supportLists]><span
style='mso-ascii-font-family:Calibri;mso-fareast-font-family:Calibri;
mso-hansi-font-family:Calibri;mso-bidi-font-family:Calibri;mso-fareast-language:
JA'><span style='mso-list:Ignore'>-<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='mso-fareast-language:JA'>Given a
(-) test, Post-test Odds of having disease / no disease = </span><!--[if gte msEquation 12]><m:oMath><m:f><m:fPr><span
   style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
   mso-hansi-font-family:"Cambria Math";mso-fareast-language:JA;font-style:
   italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i
   style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
   mso-fareast-language:JA'><m:r>Pre</m:r><m:r>-</m:r><m:r>test</m:r><m:r> </m:r><m:r>Odds</m:r><m:r>
    </m:r><m:r>numerator</m:r><m:r>*</m:r><m:r>(1-</m:r><m:r>Sens</m:r><m:r>)</m:r></span></i></m:num><m:den><i
   style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
   mso-fareast-language:JA'><m:r>Pre</m:r><m:r>-</m:r><m:r>test</m:r><m:r> </m:r><m:r>Odds</m:r><m:r>
    </m:r><m:r>denominator</m:r><m:r>*</m:r><m:r>Spec</m:r></span></i></m:den></m:f><i
 style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
 mso-fareast-language:JA'><m:r>=</m:r></span></i><m:sSub><m:sSubPr><span
   style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
   mso-hansi-font-family:"Cambria Math";mso-fareast-language:JA;font-style:
   italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i
   style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
   mso-fareast-language:JA'><m:r>OR</m:r></span></i></m:e><m:sub><i
   style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
   mso-fareast-language:JA'><m:r>pretest</m:r></span></i></m:sub></m:sSub><i
 style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
 mso-fareast-language:JA'><m:r>*</m:r></span></i><m:sSup><m:sSupPr><span
   style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
   mso-hansi-font-family:"Cambria Math";mso-fareast-language:JA;font-style:
   italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i
   style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
   mso-fareast-language:JA'><m:r>LR</m:r></span></i></m:e><m:sup><i
   style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
   mso-fareast-language:JA'><m:r>-</m:r></span></i></m:sup></m:sSup></m:oMath><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;position:relative;top:7.0pt;mso-text-raise:-7.0pt;
mso-ansi-language:EN-US;mso-fareast-language:ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape
 id="_x0000_i1025" type="#_x0000_t75" style='width:230pt;height:21pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image078.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=230 height=21
src="ROC%20scale%20interp%2020191025.fld/image079.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]><span
style='mso-fareast-language:JA'><span style='mso-spacerun:yes'> </span><o:p></o:p></span></p>

<p ><span style='mso-fareast-language:JA'>Given the slope
formula for the TP/FP ROC curve,</span><!--[if gte msEquation 12]><m:oMath><span
 style='font-family:"Cambria Math",serif'><br>
 </span></m:oMath><![endif]--><!--[if gte msEquation 12]><m:oMathPara><m:oMath><m:sSubSup><m:sSubSupPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:sSubSupPr><m:e><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>OR</m:r></span></i></m:e><m:sub><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>posttest</m:r></span></i></m:sub><m:sup><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i></m:sup></m:sSubSup><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>=</m:r></span></i><m:sSub><m:sSubPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>slope</m:r></span></i></m:e><m:sub><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>TP</m:r><m:r>/</m:r><m:r>FP</m:r></span></i></m:sub></m:sSub><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>=</m:r></span></i><m:sSup><m:sSupPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>LR</m:r></span></i></m:e><m:sup><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i></m:sup></m:sSup><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r></span></i><m:sSub><m:sSubPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>OR</m:r></span></i></m:e><m:sub><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>pretest</m:r></span></i></m:sub></m:sSub><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>≥</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><m:sSub><m:sSubPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>PPV</m:r></span></i></m:e><m:sub><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>mingoal</m:r></span></i></m:sub></m:sSub></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r></span></i><m:sSub><m:sSubPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>PPV</m:r></span></i></m:e><m:sub><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>mingoal</m:r></span></i></m:sub></m:sSub></m:den></m:f></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
 type="#_x0000_t75" style='width:287pt;height:29pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image080.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=287 height=29
src="ROC%20scale%20interp%2020191025.fld/image081.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]></p>

<p ><!--[if gte msEquation 12]><m:oMathPara><m:oMath><m:sSubSup><m:sSubSupPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:sSubSupPr><m:e><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>OR</m:r></span></i></m:e><m:sub><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>posttest</m:r></span></i></m:sub><m:sup><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>-</m:r></span></i></m:sup></m:sSubSup><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>=</m:r></span></i><m:sSub><m:sSubPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>slope</m:r></span></i></m:e><m:sub><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>FN</m:r><m:r>/</m:r><m:r>TN</m:r></span></i></m:sub></m:sSub><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>=</m:r></span></i><m:sSup><m:sSupPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>LR</m:r></span></i></m:e><m:sup><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>-</m:r></span></i></m:sup></m:sSup><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>*</m:r></span></i><m:sSub><m:sSubPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>OR</m:r></span></i></m:e><m:sub><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>pretest</m:r></span></i></m:sub></m:sSub><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>≤</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>N</m:r></span></i><m:sSub><m:sSubPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>PV</m:r></span></i></m:e><m:sub><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>mingoal</m:r></span></i></m:sub></m:sSub></m:num><m:den><m:sSub><m:sSubPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>NPV</m:r></span></i></m:e><m:sub><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>mingoal</m:r></span></i></m:sub></m:sSub></m:den></m:f></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
 type="#_x0000_t75" style='width:290pt;height:29pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image082.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=290 height=29
src="ROC%20scale%20interp%2020191025.fld/image083.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]><span
style='mso-fareast-language:JA'><o:p></o:p></span></p>

<p ><!--[if gte vml 1]><v:shapetype id="_x0000_t202"
 coordsize="21600,21600" o:spt="202" path="m,l,21600r21600,l21600,xe">
 <v:stroke joinstyle="miter"/>
 <v:path gradientshapeok="t" o:connecttype="rect"/>
</v:shapetype><v:shape id="Text_x0020_Box_x0020_13" o:spid="_x0000_s1027"
 type="#_x0000_t202" style='position:absolute;margin-left:304pt;margin-top:6.7pt;
 width:156.55pt;height:353.1pt;z-index:251664384;visibility:visible;
 mso-wrap-style:square;mso-width-percent:0;mso-height-percent:0;
 mso-wrap-distance-left:9pt;mso-wrap-distance-top:0;mso-wrap-distance-right:9pt;
 mso-wrap-distance-bottom:0;mso-position-horizontal:absolute;
 mso-position-horizontal-relative:text;mso-position-vertical:absolute;
 mso-position-vertical-relative:text;mso-width-percent:0;mso-height-percent:0;
 mso-width-relative:margin;mso-height-relative:margin;v-text-anchor:top'
 o:gfxdata="UEsDBBQABgAIAAAAIQC2gziS/gAAAOEBAAATAAAAW0NvbnRlbnRfVHlwZXNdLnhtbJSRQU7DMBBF
90jcwfIWJU67QAgl6YK0S0CoHGBkTxKLZGx5TGhvj5O2G0SRWNoz/78nu9wcxkFMGNg6quQqL6RA
0s5Y6ir5vt9lD1JwBDIwOMJKHpHlpr69KfdHjyxSmriSfYz+USnWPY7AufNIadK6MEJMx9ApD/oD
OlTrorhX2lFEilmcO2RdNtjC5xDF9pCuTyYBB5bi6bQ4syoJ3g9WQ0ymaiLzg5KdCXlKLjvcW893
SUOqXwnz5DrgnHtJTxOsQfEKIT7DmDSUCaxw7Rqn8787ZsmRM9e2VmPeBN4uqYvTtW7jvijg9N/y
JsXecLq0q+WD6m8AAAD//wMAUEsDBBQABgAIAAAAIQA4/SH/1gAAAJQBAAALAAAAX3JlbHMvLnJl
bHOkkMFqwzAMhu+DvYPRfXGawxijTi+j0GvpHsDYimMaW0Yy2fr2M4PBMnrbUb/Q94l/f/hMi1qR
JVI2sOt6UJgd+ZiDgffL8ekFlFSbvV0oo4EbChzGx4f9GRdb25HMsYhqlCwG5lrLq9biZkxWOiqY
22YiTra2kYMu1l1tQD30/bPm3wwYN0x18gb45AdQl1tp5j/sFB2T0FQ7R0nTNEV3j6o9feQzro1i
OWA14Fm+Q8a1a8+Bvu/d/dMb2JY5uiPbhG/ktn4cqGU/er3pcvwCAAD//wMAUEsDBBQABgAIAAAA
IQAvqV+yOAIAAH0EAAAOAAAAZHJzL2Uyb0RvYy54bWysVE1v2zAMvQ/YfxB0b5ykbpsacYosRYYB
QVsgLXpWZCk2KouapMTOfv0oxfnqdhp2kUmRfCIfSY8f2lqRrbCuAp3TQa9PidAcikqvc/r2Or8a
UeI80wVToEVOd8LRh8nXL+PGZGIIJahCWIIg2mWNyWnpvcmSxPFS1Mz1wAiNRgm2Zh5Vu04KyxpE
r1Uy7PdvkwZsYSxw4RzePu6NdBLxpRTcP0vphCcqp5ibj6eN5yqcyWTMsrVlpqx4lwb7hyxqVml8
9Aj1yDwjG1v9AVVX3IID6Xsc6gSkrLiINWA1g/6napYlMyLWguQ4c6TJ/T9Y/rRdmhdLfPsNWmxg
IKQxLnN4Gepppa3DFzMlaEcKd0faROsJD0H3o1F6c0cJR1uajtLru0hscgo31vnvAmoShJxa7Euk
i20XzuOT6HpwCa85UFUxr5SKSpgFMVOWbBl2UfmYJEZceClNmpzeXt/0I/CFLUAf41eK8Y9Q5iUC
akrj5an4IPl21XaMrKDYIVEW9jPkDJ9XiLtgzr8wi0OD3OAi+Gc8pAJMBjqJkhLsr7/dB3/sJVop
aXAIc+p+bpgVlKgfGrt8P0jTMLVRQYqHqNhzy+rcojf1DJChAa6c4VEM/l4dRGmhfsd9mYZX0cQ0
x7dz6g/izO9XA/eNi+k0OuGcGuYXeml4gA4dCXy+tu/Mmq6fHkfhCQ7jyrJPbd37hkgN040HWcWe
B4L3rHa844zHtnT7GJboXI9ep7/G5DcAAAD//wMAUEsDBBQABgAIAAAAIQCa+8QS4wAAAA8BAAAP
AAAAZHJzL2Rvd25yZXYueG1sTI/NTsMwEITvSLyDtUjcqJOCQpLGqfgpXHqioJ7d2LWtxusodtPw
9iwnuKy0mtnZ+Zr17Hs26TG6gALyRQZMYxeUQyPg6/PtrgQWk0Ql+4BawLeOsG6vrxpZq3DBDz3t
kmEUgrGWAmxKQ8157Kz2Mi7CoJG0Yxi9TLSOhqtRXijc93yZZQX30iF9sHLQL1Z3p93ZC9g8m8p0
pRztplTOTfP+uDXvQtzezK8rGk8rYEnP6e8CfhmoP7RU7BDOqCLrBRRZSUCJhPsHYGSolnkO7CDg
Ma8K4G3D/3O0PwAAAP//AwBQSwECLQAUAAYACAAAACEAtoM4kv4AAADhAQAAEwAAAAAAAAAAAAAA
AAAAAAAAW0NvbnRlbnRfVHlwZXNdLnhtbFBLAQItABQABgAIAAAAIQA4/SH/1gAAAJQBAAALAAAA
AAAAAAAAAAAAAC8BAABfcmVscy8ucmVsc1BLAQItABQABgAIAAAAIQAvqV+yOAIAAH0EAAAOAAAA
AAAAAAAAAAAAAC4CAABkcnMvZTJvRG9jLnhtbFBLAQItABQABgAIAAAAIQCa+8QS4wAAAA8BAAAP
AAAAAAAAAAAAAAAAAJIEAABkcnMvZG93bnJldi54bWxQSwUGAAAAAAQABADzAAAAogUAAAAA
" fillcolor="white [3201]" strokeweight=".5pt">
 <v:textbox>
  <![if !mso]>
  <table cellpadding=0 cellspacing=0 width="100%">
   <tr>
    <td><![endif]>
    <div>
    <p >Figure _: a case with pretest OR = 0.5, goal OR<sup>+</sup><sub>posttest</sub>
    = 1.1 (i.e. a x2.2 fold increase in OR given positive test), and goal OR<sup>-</sup><sub>posttest</sub>
    = 0.25 (i.e. a x0.5 fold decrease in OR given negative test). Green shade
    within the TP/FP square denotes the region of possible OR<sup>+</sup><sub>posttest</sub>
    slopes; green shade within the FN/TN square denotes the region of possible
    OR<sup>-</sup><sub>posttest</sub> slopes. The region of utility of the ROC
    curve (thick line) is an area that satisfies OR<sup>+</sup><sub>posttest</sub>
    slope being steeper than the goal OR<sup>+</sup><sub>posttest</sub> (brown
    area in TP/FP square) and OR<sup>-</sup><sub>posttest</sub> milder than the
    goal OR<sup>-</sup><sub>posttest</sub> (blue area in FN/TN square).</p>
    </div>
    <![if !mso]></td>
   </tr>
  </table>
  <![endif]></v:textbox>
</v:shape><![endif]--><![if !vml]><span style='mso-ignore:vglayout;position:
relative;z-index:251664384'><span style='position:absolute;left:294px;
top:-1425px;width:161px;height:357px'><img width=161 height=357
src="ROC%20scale%20interp%2020191025.fld/image084.png"
alt="Text Box: Figure _: a case with pretest OR = 0.5, goal OR+posttest = 1.1 (i.e. a x2.2 fold increase in OR given positive test), and goal OR-posttest = 0.25 (i.e. a x0.5 fold decrease in OR given negative test). Green shade within the TP/FP square denotes the region of possible OR+posttest slopes; green shade within the FN/TN square denotes the region of possible OR-posttest slopes. The region of utility of the ROC curve (thick line) is an area that satisfies OR+posttest slope being steeper than the goal OR+posttest (brown area in TP/FP square) and OR-posttest milder than the goal OR-posttest (blue area in FN/TN square)."
v:shapes="Text_x0020_Box_x0020_13"></span></span><![endif]><b style='mso-bidi-font-weight:
normal'><span style='mso-fareast-language:JA;mso-no-proof:yes'><!--[if gte vml 1]><v:shape
 id="Picture_x0020_12" o:spid="_x0000_i1025" type="#_x0000_t75" style='width:305pt;
 height:354pt;visibility:visible;mso-wrap-style:square'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image085.jpg" o:title=""/>
</v:shape><![endif]--><![if !vml]><img border=0 width=305 height=354
src="ROC%20scale%20interp%2020191025.fld/image085.jpg" v:shapes="Picture_x0020_12"><![endif]></span></b><b><span
style='mso-fareast-language:JA'><o:p></o:p></span></b></p>

<p ><b><span style='mso-fareast-language:JA'>Application</span></b><span
style='mso-fareast-language:JA'> <o:p></o:p></span></p>

<p  style='text-indent:-.25in;mso-list:l1 level1 lfo2'><![if !supportLists]><span
style='mso-fareast-font-family:Calibri;mso-fareast-theme-font:minor-latin;
mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;mso-fareast-language:
JA'><span style='mso-list:Ignore'>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='mso-fareast-language:JA'>Draw a square
coordinate with origin (X=0, Y=0) at bottom left and span of up to X=1 (going
right) and Y=1 (going up).<o:p></o:p></span></p>

<p  style='text-indent:-.25in;mso-list:l1 level1 lfo2'><![if !supportLists]><span
style='mso-fareast-font-family:Calibri;mso-fareast-theme-font:minor-latin;
mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;mso-fareast-language:
JA'><span style='mso-list:Ignore'>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='mso-fareast-language:JA'>Obtain the
disease prevalence of your population. Calculate OR<sub>pretest</sub> = <i>Prevalence</i>/(1-<i>Prevalence</i>).
Draw a line from the origin to (X=1, Y=OR<sub>pretest</sub>).<o:p></o:p></span></p>

<p  style='text-indent:-.25in;mso-list:l1 level1 lfo2'><![if !supportLists]><span
style='mso-fareast-font-family:Calibri;mso-fareast-theme-font:minor-latin;
mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;mso-fareast-language:
JA'><span style='mso-list:Ignore'>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='mso-fareast-language:JA'>Draw a
line from the origin to (X=1, Y=OR<sup>+</sup><sub>posttest</sub> goal). The slope
will be OR<sup>+</sup><sub>posttest</sub> = </span><!--[if gte msEquation 12]><m:oMath><m:f><m:fPr><span
   style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
   mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
   normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><m:sSub><m:sSubPr><span
     style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
     mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
     normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
     normal'><span style='font-family:"Cambria Math",serif'><m:r>PPV</m:r></span></i></m:e><m:sub><i
     style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>goal</m:r></span></i></m:sub></m:sSub></m:num><m:den><i
   style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r></span></i><m:sSub><m:sSubPr><span
     style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
     mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
     normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
     normal'><span style='font-family:"Cambria Math",serif'><m:r>PPV</m:r></span></i></m:e><m:sub><i
     style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>goal</m:r></span></i></m:sub></m:sSub></m:den></m:f></m:oMath><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;position:relative;top:8.0pt;mso-text-raise:-8.0pt;
mso-ansi-language:EN-US;mso-fareast-language:ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape
 id="_x0000_i1025" type="#_x0000_t75" style='width:42pt;height:22pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image086.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=42 height=22
src="ROC%20scale%20interp%2020191025.fld/image087.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]><span
style='mso-spacerun:yes'> </span><span style='mso-fareast-language:JA'>= LR<sup>+</sup><sub>
</sub>* OR<sub>pretest</sub>.<o:p></o:p></span></p>

<p  style='text-indent:-.25in;mso-list:l1 level1 lfo2'><![if !supportLists]><span
style='mso-fareast-font-family:Calibri;mso-fareast-theme-font:minor-latin;
mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;mso-fareast-language:
JA'><span style='mso-list:Ignore'>4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='mso-fareast-language:JA'>Draw a
line from (X=0, Y=1) to (X=1, Y=0). The intersection between this line and the
line from Step 1 is where the top right corner of the Sens/Spec ROC curve will
fit.<o:p></o:p></span></p>

<p  style='text-indent:-.25in;mso-list:l1 level1 lfo2'><![if !supportLists]><span
style='mso-fareast-font-family:Calibri;mso-fareast-theme-font:minor-latin;
mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;mso-fareast-language:
JA'><span style='mso-list:Ignore'>5.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='mso-fareast-language:JA'>Fit the
Sens/Spec ROC curve. Place the top right corner at the intersection on Step 3; place
the bottom left corner at the origin.<o:p></o:p></span></p>

<p  style='text-indent:-.25in;mso-list:l1 level1 lfo2'><![if !supportLists]><span
style='mso-fareast-font-family:Calibri;mso-fareast-theme-font:minor-latin;
mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;mso-fareast-language:
JA'><span style='mso-list:Ignore'>6.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='mso-fareast-language:JA'>Look for
the intersection between the line from Step 2 and the fitted ROC curve. Is
there any portion of the ROC curve inside the <i>region of utility</i> left of/above
the Step 2 line? If not, this test is not suitable. Either lower the OR<sup>+</sup><sub>posttest</sub>
goal or pick another test with a better Sens/Spec ROC characteristic at the
strict end of its threshold. If yes, continue.<o:p></o:p></span></p>

<p  style='text-indent:-.25in;mso-list:l1 level1 lfo2'><![if !supportLists]><span
style='mso-fareast-font-family:Calibri;mso-fareast-theme-font:minor-latin;
mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;mso-fareast-language:
JA'><span style='mso-list:Ignore'>7.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='mso-fareast-language:JA'>Draw the
second square coordinate, with origin at top right overlapping the ROC curve’s
top right point, and span of up to X=1 (going left) and Y=1 (going down).<o:p></o:p></span></p>

<p  style='text-indent:-.25in;mso-list:l1 level1 lfo2'><![if !supportLists]><span
style='mso-fareast-font-family:Calibri;mso-fareast-theme-font:minor-latin;
mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;mso-fareast-language:
JA'><span style='mso-list:Ignore'>8.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='mso-fareast-language:JA'>Extend the
OR<sub>pretest</sub> slope to bottom left to fill the second square coordinate.
This line should hit the second (upside-down) coordinate’s left edge at (X=1,
Y=OR<sub>pretest</sub>).<o:p></o:p></span></p>

<p  style='text-indent:-.25in;mso-list:l1 level1 lfo2'><![if !supportLists]><span
style='mso-fareast-font-family:Calibri;mso-fareast-theme-font:minor-latin;
mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;mso-fareast-language:
JA'><span style='mso-list:Ignore'>9.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='mso-fareast-language:JA'>Draw a
line from the origin of the second (upside-down) coordinate to (X=1, Y=OR<sup>-</sup><sub>posttest</sub>).
The slope will be OR<sup>-</sup><sub>posttest</sub> = </span><!--[if gte msEquation 12]><m:oMath><m:f><m:fPr><span
   style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
   mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
   normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
   normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>N</m:r></span></i><m:sSub><m:sSubPr><span
     style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
     mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
     normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
     normal'><span style='font-family:"Cambria Math",serif'><m:r>PV</m:r></span></i></m:e><m:sub><i
     style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>mingoal</m:r></span></i></m:sub></m:sSub></m:num><m:den><m:sSub><m:sSubPr><span
     style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
     mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
     normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i style='mso-bidi-font-style:
     normal'><span style='font-family:"Cambria Math",serif'><m:r>NPV</m:r></span></i></m:e><m:sub><i
     style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>mingoal</m:r></span></i></m:sub></m:sSub></m:den></m:f></m:oMath><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;position:relative;top:9.0pt;mso-text-raise:-9.0pt;
mso-ansi-language:EN-US;mso-fareast-language:ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape
 id="_x0000_i1025" type="#_x0000_t75" style='width:56pt;height:23pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image088.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=56 height=23
src="ROC%20scale%20interp%2020191025.fld/image089.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]>=LR<sup>-</sup>*OR<sub>pretest</sub>.<span
style='mso-fareast-language:JA'><o:p></o:p></span></p>

<p  style='text-indent:-.25in;mso-list:l1 level1 lfo2'><![if !supportLists]><span
style='mso-fareast-font-family:Calibri;mso-fareast-theme-font:minor-latin;
mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;mso-fareast-language:
JA'><span style='mso-list:Ignore'>10.<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span></span><![endif]>Look for the intersection between the line from
Step 9 and the fitted ROC curve. Is there any portion of the ROC curve inside
the <i>region of utility</i> to the left of/above the Step 9 line? If not, this
test is not suitable. Either loosen (i.e. larger # = closer to OR<sub>pretest</sub>
= milder decrease from OR<sub>pretest</sub>) the OR<sup>-</sup><sub>posttest</sub>
goal or pick another test with a better Sens/Spec ROC characteristic at the
lenient end of its threshold. If yes, continue.<span style='mso-fareast-language:
JA'><o:p></o:p></span></p>

<p  style='text-indent:-.25in;mso-list:l1 level1 lfo2'><![if !supportLists]><span
style='mso-fareast-font-family:Calibri;mso-fareast-theme-font:minor-latin;
mso-bidi-font-family:Calibri;mso-bidi-theme-font:minor-latin;mso-fareast-language:
JA'><span style='mso-list:Ignore'>11.<span style='font:7.0pt "Times New Roman"'>&nbsp;
</span></span></span><![endif]>Look for the overlapping <i>regions of utility</i>
defined by Steps 6 and 10. Pick a threshold within this region that maximizes
Sens and Spec.<span style='mso-fareast-language:JA'><o:p></o:p></span></p>

<p ><span style='mso-fareast-language:JA'>LR<sup>+</sup> and LR<sup>-</sup>
of sequential tests can be multiplied on top of pretest odds, such that each subsequent
test drives the OR<sup>+</sup><sub>posttest</sub> farther up and OR<sup>-</sup><sub>posttest
</sub>farther down:<o:p></o:p></span></p>

<p ><!--[if gte msEquation 12]><m:oMathPara><m:oMath><m:sSubSup><m:sSubSupPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:sSubSupPr><m:e><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>OR</m:r></span></i></m:e><m:sub><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>posttest</m:r></span></i></m:sub><m:sup><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i></m:sup></m:sSubSup><m:d><m:dPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";mso-fareast-language:JA;font-style:
    italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:dPr><m:e><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>n</m:r></span></i></m:e></m:d><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
  mso-fareast-language:JA'><m:r>=</m:r></span></i><m:sSub><m:sSubPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";mso-fareast-language:JA;font-style:
    italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>OR</m:r></span></i></m:e><m:sub><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>pretest</m:r></span></i></m:sub></m:sSub><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
  mso-fareast-language:JA'><m:r>*</m:r></span></i><m:nary><m:naryPr><m:chr
     m:val="∏"/><m:limLoc m:val="subSup"/><span style='font-family:"Cambria Math",serif;
    mso-ascii-font-family:"Cambria Math";mso-hansi-font-family:"Cambria Math";
    mso-fareast-language:JA;font-style:italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:naryPr><m:sub><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>i</m:r><m:r>=1</m:r></span></i></m:sub><m:sup><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>n</m:r></span></i></m:sup><m:e><m:sSup><m:sSupPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";mso-fareast-language:JA;font-style:
      italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
      mso-fareast-language:JA'><m:r>LR</m:r></span></i></m:e><m:sup><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
      mso-fareast-language:JA'><m:r>+</m:r></span></i></m:sup></m:sSup><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>(</m:r><m:r>i</m:r><m:r>)</m:r></span></i></m:e></m:nary></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
 type="#_x0000_t75" style='width:194pt;height:26pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image090.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=194 height=26
src="ROC%20scale%20interp%2020191025.fld/image091.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]><span
style='mso-fareast-language:JA'><o:p></o:p></span></p>

<p ><!--[if gte msEquation 12]><m:oMathPara><m:oMath><m:sSubSup><m:sSubSupPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:sSubSupPr><m:e><i style='mso-bidi-font-style:
    normal'><span style='font-family:"Cambria Math",serif'><m:r>OR</m:r></span></i></m:e><m:sub><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>posttest</m:r></span></i></m:sub><m:sup><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>-</m:r></span></i></m:sup></m:sSubSup><m:d><m:dPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";mso-fareast-language:JA;font-style:
    italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:dPr><m:e><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>n</m:r></span></i></m:e></m:d><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
  mso-fareast-language:JA'><m:r>=</m:r></span></i><m:sSub><m:sSubPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";mso-fareast-language:JA;font-style:
    italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:sSubPr><m:e><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>OR</m:r></span></i></m:e><m:sub><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>pretest</m:r></span></i></m:sub></m:sSub><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
  mso-fareast-language:JA'><m:r>*</m:r></span></i><m:nary><m:naryPr><m:chr
     m:val="∏"/><m:limLoc m:val="subSup"/><span style='font-family:"Cambria Math",serif;
    mso-ascii-font-family:"Cambria Math";mso-hansi-font-family:"Cambria Math";
    mso-fareast-language:JA;font-style:italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:naryPr><m:sub><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>i</m:r><m:r>=1</m:r></span></i></m:sub><m:sup><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>n</m:r></span></i></m:sup><m:e><m:sSup><m:sSupPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";mso-fareast-language:JA;font-style:
      italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
      mso-fareast-language:JA'><m:r>LR</m:r></span></i></m:e><m:sup><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
      mso-fareast-language:JA'><m:r>-</m:r></span></i></m:sup></m:sSup><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
    mso-fareast-language:JA'><m:r>(</m:r><m:r>i</m:r><m:r>)</m:r></span></i></m:e></m:nary></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
 type="#_x0000_t75" style='width:194pt;height:26pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image092.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=194 height=26
src="ROC%20scale%20interp%2020191025.fld/image093.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]><span
style='mso-fareast-language:JA'><o:p></o:p></span></p>

<p ><span style='mso-fareast-language:JA'><o:p>&nbsp;</o:p></span></p>

<p ><span style='mso-fareast-language:JA'>Remember to set OR<sub>pretest</sub>
of (n+1)-th test to the OR<sub>posttest</sub> of n-th test. More on this method:
</span><!--[if supportFields]><span style='mso-fareast-language:JA'><span
style='mso-element:field-begin'></span><span
style='mso-spacerun:yes'> </span>ADDIN ZOTERO_ITEM CSL_CITATION
{&quot;citationID&quot;:&quot;3C4LfKnJ&quot;,&quot;properties&quot;:{&quot;formattedCitation&quot;:&quot;(1)&quot;,&quot;plainCitation&quot;:&quot;(1)&quot;,&quot;noteIndex&quot;:0},&quot;citationItems&quot;:[{&quot;id&quot;:947,&quot;uris&quot;:[&quot;http://zotero.org/users/5871539/items/A4EKTXMP&quot;],&quot;uri&quot;:[&quot;http://zotero.org/users/5871539/items/A4EKTXMP&quot;],&quot;itemData&quot;:{&quot;id&quot;:947,&quot;type&quot;:&quot;article-journal&quot;,&quot;abstract&quot;:&quot;In
this article we provide an introduction to the use of likelihood ratios in
clinical ophthalmology. Likelihood ratios permit the best use of clinical test
results to establish diagnoses for the individual patient. Examples and
step-by-step calculations demonstrate the estimation of pretest probability,
pretest odds, and calculation of posttest odds and posttest probability using
likelihood ratios. The benefits and limitations of this approach are
discussed.&quot;,&quot;container-title&quot;:&quot;Indian Journal of
Ophthalmology&quot;,&quot;DOI&quot;:&quot;10.4103/0301-4738.49397&quot;,&quot;ISSN&quot;:&quot;0301-4738&quot;,&quot;issue&quot;:&quot;3&quot;,&quot;journalAbbreviation&quot;:&quot;Indian
J Ophthalmol&quot;,&quot;note&quot;:&quot;PMID: 19384017\nPMCID:
PMC2683447&quot;,&quot;page&quot;:&quot;217-221&quot;,&quot;source&quot;:&quot;PubMed
Central&quot;,&quot;title&quot;:&quot;Likelihood ratios: Clinical application
in day-to-day practice&quot;,&quot;title-short&quot;:&quot;Likelihood
ratios&quot;,&quot;volume&quot;:&quot;57&quot;,&quot;author&quot;:[{&quot;family&quot;:&quot;Parikh&quot;,&quot;given&quot;:&quot;Rajul&quot;},{&quot;family&quot;:&quot;Parikh&quot;,&quot;given&quot;:&quot;Shefali&quot;},{&quot;family&quot;:&quot;Arun&quot;,&quot;given&quot;:&quot;Ellen&quot;},{&quot;family&quot;:&quot;Thomas&quot;,&quot;given&quot;:&quot;Ravi&quot;}],&quot;issued&quot;:{&quot;date-parts&quot;:[[&quot;2009&quot;]]}}}],&quot;schema&quot;:&quot;https://github.com/citation-style-language/schema/raw/master/csl-citation.json&quot;}
<span style='mso-element:field-separator'></span></span><![endif]--><span
style='mso-fareast-language:JA'><span style='mso-no-proof:yes'>(1)</span></span><!--[if supportFields]><span
style='mso-fareast-language:JA'><span style='mso-element:field-end'></span></span><![endif]--><span
style='mso-fareast-language:JA'><o:p></o:p></span></p>

<h1><span style='mso-fareast-language:JA'>Precision-Recall curve 20200210<o:p></o:p></span></h1>

<p ><span style='mso-fareast-language:JA'>Precision and Recall
are defined below, with their respective extrema. <o:p></o:p></span></p>

<table  border=1 cellspacing=0 cellpadding=0
 style='border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;
 mso-yfti-tbllook:1184;mso-padding-alt:0in 5.4pt 0in 5.4pt'>
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
  <td width=240 valign=top style='width:179.75pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><span style='mso-fareast-language:JA'><o:p>&nbsp;</o:p></span></p>
  </td>
  <td width=186 valign=top style='width:139.5pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><span style='mso-fareast-language:JA'>Strict threshold<o:p></o:p></span></p>
  </td>
  <td width=198 valign=top style='width:148.25pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt'>
  <p ><span style='mso-fareast-language:JA'>Lenient threshold<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1;height:19.75pt'>
  <td width=240 valign=top style='width:179.75pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0in 5.4pt 0in 5.4pt;height:19.75pt'>
  <p ><span style='mso-fareast-language:JA'>X-axis = Recall =
  Sensitivity = </span><!--[if gte msEquation 12]><m:oMath><m:f><m:fPr><span
     style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
     mso-hansi-font-family:"Cambria Math";mso-fareast-language:JA;font-style:
     italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i
     style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
     mso-fareast-language:JA'><m:r>A</m:r></span></i></m:num><m:den><i
     style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
     mso-fareast-language:JA'><m:r>A</m:r><m:r>+</m:r><m:r>C</m:r></span></i></m:den></m:f></m:oMath><![endif]--><![if !msEquation]><span
  style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
  mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
  mso-bidi-theme-font:minor-bidi;position:relative;top:6.0pt;mso-text-raise:
  -6.0pt;mso-ansi-language:EN-US;mso-fareast-language:ZH-TW;mso-bidi-language:
  AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025" type="#_x0000_t75"
   style='width:16pt;height:19pt'>
   <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image094.emz" o:title=""
    chromakey="white"/>
  </v:shape><![endif]--><![if !vml]><img width=16 height=19
  src="ROC%20scale%20interp%2020191025.fld/image095.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]><span
  style='mso-fareast-language:JA'><o:p></o:p></span></p>
  </td>
  <td width=186 valign=top style='width:139.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt;height:19.75pt'>
  <p ><span style='mso-fareast-language:JA'>0 ≤ low<o:p></o:p></span></p>
  </td>
  <td width=198 valign=top style='width:148.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt;height:19.75pt'>
  <p ><span style='mso-fareast-language:JA'>high ≤ 1<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2;height:19.75pt'>
  <td width=240 valign=top style='width:179.75pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0in 5.4pt 0in 5.4pt;height:19.75pt'>
  <p ><span style='mso-fareast-language:JA'>Y-axis = Precision =
  PPV = </span><!--[if gte msEquation 12]><m:oMath><m:f><m:fPr><span
     style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
     mso-hansi-font-family:"Cambria Math";mso-fareast-language:JA;font-style:
     italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i
     style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
     mso-fareast-language:JA'><m:r>A</m:r></span></i></m:num><m:den><i
     style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
     mso-fareast-language:JA'><m:r>A</m:r><m:r>+</m:r><m:r>B</m:r></span></i></m:den></m:f></m:oMath><![endif]--><![if !msEquation]><span
  style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
  mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
  mso-bidi-theme-font:minor-bidi;position:relative;top:6.0pt;mso-text-raise:
  -6.0pt;mso-ansi-language:EN-US;mso-fareast-language:ZH-TW;mso-bidi-language:
  AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025" type="#_x0000_t75"
   style='width:17pt;height:19pt'>
   <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image096.emz" o:title=""
    chromakey="white"/>
  </v:shape><![endif]--><![if !vml]><img width=17 height=19
  src="ROC%20scale%20interp%2020191025.fld/image097.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]><span
  style='mso-fareast-language:JA'><o:p></o:p></span></p>
  </td>
  <td width=186 valign=top style='width:139.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt;height:19.75pt'>
  <p ><span style='mso-fareast-language:JA'>high ≤ 1<o:p></o:p></span></p>
  </td>
  <td width=198 valign=top style='width:148.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt;height:19.75pt'>
  <p ><i><span style='mso-fareast-language:JA'>Prevalence</span></i><span
  style='mso-fareast-language:JA'> ≤ low<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:3;mso-yfti-lastrow:yes;height:25.15pt'>
  <td width=240 valign=top style='width:179.75pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0in 5.4pt 0in 5.4pt;height:25.15pt'>
  <p ><span style='mso-fareast-language:JA'>Slope through origin
  = </span><!--[if gte msEquation 12]><m:oMath><m:f><m:fPr><span
     style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
     mso-hansi-font-family:"Cambria Math";mso-fareast-language:JA;font-style:
     italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i
     style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
     mso-fareast-language:JA'><m:r>A</m:r><m:r>+</m:r><m:r>C</m:r></span></i></m:num><m:den><i
     style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
     mso-fareast-language:JA'><m:r>A</m:r><m:r>+</m:r><m:r>B</m:r></span></i></m:den></m:f></m:oMath><![endif]--><![if !msEquation]><span
  style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
  mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
  mso-bidi-theme-font:minor-bidi;position:relative;top:6.0pt;mso-text-raise:
  -6.0pt;mso-ansi-language:EN-US;mso-fareast-language:ZH-TW;mso-bidi-language:
  AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025" type="#_x0000_t75"
   style='width:17pt;height:19pt'>
   <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image098.emz" o:title=""
    chromakey="white"/>
  </v:shape><![endif]--><![if !vml]><img width=17 height=19
  src="ROC%20scale%20interp%2020191025.fld/image099.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]><span
  style='mso-fareast-language:JA'><o:p></o:p></span></p>
  </td>
  <td width=186 valign=top style='width:139.5pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt;height:25.15pt'>
  <p ><span style='mso-fareast-language:JA'>high ≤ </span><!--[if gte msEquation 12]><m:oMath><m:f><m:fPr><span
     style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
     mso-hansi-font-family:"Cambria Math";mso-fareast-language:JA;font-style:
     italic;mso-bidi-font-style:normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i
     style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
     mso-fareast-language:JA'><m:r>A</m:r><m:r>+</m:r><m:r>C</m:r></span></i></m:num><m:den><i
     style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif;
     mso-fareast-language:JA'><m:r>A</m:r></span></i></m:den></m:f></m:oMath><![endif]--><![if !msEquation]><span
  style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
  mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
  mso-bidi-theme-font:minor-bidi;position:relative;top:6.0pt;mso-text-raise:
  -6.0pt;mso-ansi-language:EN-US;mso-fareast-language:ZH-TW;mso-bidi-language:
  AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025" type="#_x0000_t75"
   style='width:16pt;height:19pt'>
   <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image100.emz" o:title=""
    chromakey="white"/>
  </v:shape><![endif]--><![if !vml]><img width=16 height=19
  src="ROC%20scale%20interp%2020191025.fld/image101.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]><span
  style='mso-fareast-language:JA'>- </span><span lang=JA style='font-family:
  "PMingLiU",serif;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
  mso-hansi-theme-font:minor-latin;mso-fareast-language:JA'>→</span><span
  style='mso-fareast-language:JA'> ∞<o:p></o:p></span></p>
  </td>
  <td width=198 valign=top style='width:148.25pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0in 5.4pt 0in 5.4pt;height:25.15pt'>
  <p ><span style='mso-fareast-language:JA'>high ≤ <i>Prevalence</i><o:p></o:p></span></p>
  </td>
 </tr>
</table>

<p ><span style='mso-fareast-language:JA'>An indiscriminative (“no
skill”) test will have X ranging from 1 to 0 as threshold becomes stricter, and
Y = <i>Prevalence</i>.<o:p></o:p></span></p>

<p ><!--[if gte vml 1]><v:shape id="Picture_x0020_8" o:spid="_x0000_s1026"
 type="#_x0000_t75" style='position:absolute;margin-left:263.45pt;margin-top:14.45pt;
 width:193.05pt;height:193.05pt;z-index:251660288;visibility:visible;
 mso-wrap-style:square;mso-width-percent:0;mso-height-percent:0;
 mso-wrap-distance-left:9pt;mso-wrap-distance-top:0;mso-wrap-distance-right:9pt;
 mso-wrap-distance-bottom:0;mso-position-horizontal:absolute;
 mso-position-horizontal-relative:text;mso-position-vertical:absolute;
 mso-position-vertical-relative:text;mso-width-percent:0;mso-height-percent:0;
 mso-width-relative:page;mso-height-relative:page'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image102.jpg" o:title=""/>
 <w:wrap type="square"/>
</v:shape><![endif]--><![if !vml]><img width=193 height=193
src="ROC%20scale%20interp%2020191025.fld/image102.jpg" align=left hspace=12
v:shapes="Picture_x0020_8"><![endif]><span style='mso-fareast-language:JA'>The
following equation describes Y as a function of X:<o:p></o:p></span></p>

<p ><!--[if gte msEquation 12]><m:oMathPara><m:oMath><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>Y</m:r><m:r>=</m:r><m:r>PPV</m:r><m:r>=</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><m:sSup><m:sSupPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>LR</m:r></span></i></m:e><m:sup><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i></m:sup></m:sSup></m:num><m:den><m:sSup><m:sSupPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>LR</m:r></span></i></m:e><m:sup><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i></m:sup></m:sSup><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i><m:f><m:fPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>1</m:r></span></i></m:num><m:den><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>Odds</m:r><m:r>
       </m:r><m:r>Ratio</m:r></span></i></m:den></m:f></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>=</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><m:f><m:fPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>Sensitivity</m:r></span></i></m:num><m:den><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>Specificity</m:r></span></i></m:den></m:f></m:num><m:den><m:f><m:fPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>Sensitivity</m:r></span></i></m:num><m:den><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>Specificity</m:r></span></i></m:den></m:f><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i><m:f><m:fPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>Prevalence</m:r></span></i></m:num><m:den><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>Prevalence</m:r></span></i></m:den></m:f></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>=</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><m:f><m:fPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>X</m:r></span></i></m:num><m:den><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>Specificity</m:r></span></i></m:den></m:f></m:num><m:den><m:f><m:fPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>X</m:r></span></i></m:num><m:den><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>Specificity</m:r></span></i></m:den></m:f><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i><m:f><m:fPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>Prevalence</m:r></span></i></m:num><m:den><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>Prevalence</m:r></span></i></m:den></m:f></m:den></m:f></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
 type="#_x0000_t75" style='width:468pt;height:98pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image103.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=468 height=98
src="ROC%20scale%20interp%2020191025.fld/image104.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]></p>

<p >On the surface, X <span lang=ZH-TW style='font-family:"PMingLiU",serif;
mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin'>→</span><span
lang=ZH-TW> </span>0 may seem to result in<span style='mso-spacerun:yes'> 
</span>Y <span lang=ZH-TW style='font-family:"PMingLiU",serif;mso-ascii-font-family:
Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin'>→</span> 0.
However, the reason that Y = PPV<span lang=ZH-TW style='font-family:"PMingLiU",serif;
mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin'>→</span><span
lang=ZH-TW> </span>1 as X=<i>Sensitivity</i> <span lang=ZH-TW style='font-family:
"PMingLiU",serif;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin'>→</span> 0 which happens with a strict threshold is that <i>Specificity</i>
is not totally independent of <i>Sensitivity</i> in any test with overlapping values
for diseased vs healthy population, therefore <i>LR<sup>+ </sup></i><span
lang=ZH-TW style='font-family:"PMingLiU",serif;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin'>→</span><span
lang=ZH-TW> </span><span lang=ZH-TW style='font-family:"PMingLiU",serif;
mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin'>∞</span><span
lang=ZH-TW> </span>while 1/<i>OR</i> stays constant. This trend of LR<sup>+</sup>
is also demonstrated on the steepening slope of Sens/Spec curve through origin.</p>

<p >The precision-recall curve is another way to visualize the
PPV-to-Sensitivity tradeoff when setting a PPV<sub>mingoal</sub>. Namely, the <i>region
of utility </i>is above the horizontal line defined by Y=PPV­­<sub>mingoal</sub>,
restricting X to its lower end. Just like in the TP/FP ROC discussion, a PPV<sub>mingoal</sub>
below the <i>Prevalence</i> of one’s target population is nonsensical because
all (X,Y) are necessarily above Y=<i>Prevalence</i>. One should then feel free
to select the globally optimal point closest to (X,Y) = (1,1).</p>

<p ><o:p>&nbsp;</o:p></p>

<p >Drop in <i>Prevalence</i> depresses Y more at the higher end
of X, since the increase in the term <!--[if gte msEquation 12]><m:oMath><m:f><m:fPr><span
   style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
   mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
   normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
   normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>Prev</m:r></span></i></m:num><m:den><i
   style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>Prev</m:r></span></i></m:den></m:f></m:oMath><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;position:relative;top:6.0pt;mso-text-raise:-6.0pt;
mso-ansi-language:EN-US;mso-fareast-language:ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape
 id="_x0000_i1025" type="#_x0000_t75" style='width:29pt;height:19pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image105.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=29 height=19
src="ROC%20scale%20interp%2020191025.fld/image106.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]><span
style='mso-spacerun:yes'> </span>affects PPV more when <!--[if gte msEquation 12]><m:oMath><m:f><m:fPr><span
   style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
   mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
   normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><i style='mso-bidi-font-style:
   normal'><span style='font-family:"Cambria Math",serif'><m:r>Sensitivity</m:r></span></i></m:num><m:den><i
   style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>1-</m:r><m:r>Specificity</m:r></span></i></m:den></m:f></m:oMath><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;position:relative;top:7.0pt;mso-text-raise:-7.0pt;
mso-ansi-language:EN-US;mso-fareast-language:ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape
 id="_x0000_i1025" type="#_x0000_t75" style='width:54pt;height:21pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image107.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=54 height=21
src="ROC%20scale%20interp%2020191025.fld/image108.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]><span
style='mso-spacerun:yes'> </span>is small.</p>

<p ><!--[if gte msEquation 12]><m:oMathPara><m:oMath><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>Y</m:r><m:r>=</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><m:sSup><m:sSupPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>Prev</m:r><m:r>*</m:r><m:r>LR</m:r></span></i></m:e><m:sup><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i></m:sup></m:sSup></m:num><m:den><m:sSup><m:sSupPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>Prev</m:r><m:r>*</m:r><m:r>LR</m:r></span></i></m:e><m:sup><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i></m:sup></m:sSup><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+(1-</m:r><m:r>Prev</m:r><m:r>)</m:r></span></i></m:den></m:f><i
  style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>=</m:r></span></i><m:f><m:fPr><span
    style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
    mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
    normal'><m:ctrlPr></m:ctrlPr></span></m:fPr><m:num><m:sSup><m:sSupPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i style='mso-bidi-font-style:
      normal'><span style='font-family:"Cambria Math",serif'><m:r>Prev</m:r><m:r>*</m:r><m:r>LR</m:r></span></i></m:e><m:sup><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i></m:sup></m:sSup></m:num><m:den><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>Prev</m:r></span></i><m:d><m:dPr><span
      style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
      mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
      normal'><m:ctrlPr></m:ctrlPr></span></m:dPr><m:e><m:sSup><m:sSupPr><span
        style='font-family:"Cambria Math",serif;mso-ascii-font-family:"Cambria Math";
        mso-hansi-font-family:"Cambria Math";font-style:italic;mso-bidi-font-style:
        normal'><m:ctrlPr></m:ctrlPr></span></m:sSupPr><m:e><i
        style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>LR</m:r></span></i></m:e><m:sup><i
        style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+</m:r></span></i></m:sup></m:sSup><i
      style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>-</m:r><m:r>1</m:r></span></i></m:e></m:d><i
    style='mso-bidi-font-style:normal'><span style='font-family:"Cambria Math",serif'><m:r>+1</m:r></span></i></m:den></m:f></m:oMath></m:oMathPara><![endif]--><![if !msEquation]><span
style='font-size:11.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
minor-latin;mso-fareast-font-family:PMingLiU;mso-fareast-theme-font:minor-fareast;
mso-hansi-theme-font:minor-latin;mso-bidi-font-family:"Times New Roman";
mso-bidi-theme-font:minor-bidi;mso-ansi-language:EN-US;mso-fareast-language:
ZH-TW;mso-bidi-language:AR-SA'><!--[if gte vml 1]><v:shape id="_x0000_i1025"
 type="#_x0000_t75" style='width:245pt;height:28pt'>
 <v:imagedata src="ROC%20scale%20interp%2020191025.fld/image109.emz" o:title=""
  chromakey="white"/>
</v:shape><![endif]--><![if !vml]><img width=245 height=28
src="ROC%20scale%20interp%2020191025.fld/image110.png" v:shapes="_x0000_i1025"><![endif]></span><![endif]></p>

<<<<<<< Updated upstream
<p >1-Y is not directly proportional to 1-Prev.</p>
