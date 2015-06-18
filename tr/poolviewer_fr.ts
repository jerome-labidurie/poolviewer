<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fr_FR">
<context>
    <name>ConfigDlg</name>
    <message>
        <location filename="../ui/config.ui" line="14"/>
        <source>Config</source>
        <translation>Configuration</translation>
    </message>
    <message>
        <location filename="../ui/config.ui" line="42"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Swimovate poolmate pod type.&lt;/p&gt;&lt;p&gt;Type A pods have a &amp;quot;Type A&amp;quot; sticker underneath.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ui/config.ui" line="45"/>
        <source>Pod type</source>
        <translation>Type de support</translation>
    </message>
    <message>
        <location filename="../ui/config.ui" line="60"/>
        <source>Original &amp;Pod</source>
        <translation>&amp;Original</translation>
    </message>
    <message>
        <location filename="../ui/config.ui" line="73"/>
        <source>&amp;Type A Pod</source>
        <translation>&amp;Type A</translation>
    </message>
    <message>
        <location filename="../ui/config.ui" line="87"/>
        <source>CSV Data file</source>
        <translation>Fichier CSV</translation>
    </message>
    <message>
        <location filename="../ui/config.ui" line="100"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Location of csv datafile.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>Localisation du fichier de données CSV</translation>
    </message>
    <message>
        <location filename="../ui/config.ui" line="113"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Arial&apos;; font-size:9pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Specify type of poolmate pod, &amp;quot;Type-A&amp;quot; pods are labelled underneath.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;If you have an original non-type A pod then this is supported by the code in the application you will need to ensure the USB device is set with the correct permissions by creating a udev rule such as:&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;$ /etc/udev/rules.d/51-poolmate.rules&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;SUBSYSTEMS==&amp;quot;usb&amp;quot; ATTRS{idVendor}==&amp;quot;0451&amp;quot; ATTRS{idProduct}==&amp;quot;5051&amp;quot; MODE:=&amp;quot;0666&amp;quot;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;For a type A pod you will need to use a serial driver ftdio_sio and add the id to the running driver:&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;br /&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;$ modprobe ftdi_sio&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;$ echo 0403 8b30 &amp;gt; /sys/bus/usb-serial/drivers/ftdi_sio/new_id&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>Summary</name>
    <message>
        <location filename="../ui/summary.ui" line="26"/>
        <source>PoolMate Viewer</source>
        <translation>PoolMate Viewer</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="76"/>
        <source>Volume</source>
        <translation>Volume</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="86"/>
        <source>Technique</source>
        <translation>Technique</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="96"/>
        <location filename="../ui/summary.ui" line="187"/>
        <location filename="../ui/summary.ui" line="315"/>
        <source>Lengths</source>
        <translation>Longueurs</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="127"/>
        <source>Workouts</source>
        <translation>Entraînement</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="162"/>
        <source>Date</source>
        <translation>Date</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="167"/>
        <location filename="../ui/summary.ui" line="340"/>
        <source>Time</source>
        <translation>Heure</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="172"/>
        <source>Pool</source>
        <translation>Piscine</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="177"/>
        <location filename="../ui/summary.ui" line="276"/>
        <source>Duration</source>
        <translation>Durée</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="182"/>
        <source>Cal</source>
        <translation>Calories</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="192"/>
        <source>Total m</source>
        <translation>Distance (m)</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="197"/>
        <source>Rest</source>
        <translation>Repos</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="246"/>
        <location filename="../ui/summary.ui" line="410"/>
        <source>Sets</source>
        <translation>Exercices</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="271"/>
        <source>Set</source>
        <translation>Exercice</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="281"/>
        <location filename="../ui/summary.ui" line="345"/>
        <source>Strokes</source>
        <translation>Mouvements</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="286"/>
        <source>Dist</source>
        <translation>Dist.</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="291"/>
        <location filename="../ui/summary.ui" line="479"/>
        <source>Speed</source>
        <translation>Vitesse</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="296"/>
        <source>Effic</source>
        <translation>Efficience</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="301"/>
        <location filename="../ui/summary.ui" line="469"/>
        <source>Rate</source>
        <translation>Cadence</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="306"/>
        <location filename="../ui/summary.ui" line="459"/>
        <source>Stroke</source>
        <translation>Mouvement</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="362"/>
        <source>Edit</source>
        <translation>Éditer</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="372"/>
        <source>Delete</source>
        <translation>Effacer</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="395"/>
        <source>Print</source>
        <translation>Imprimer</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="402"/>
        <source>Graph:</source>
        <translation>Graphique:</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="415"/>
        <source>One week</source>
        <translation>Une semaine</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="420"/>
        <source>One month</source>
        <translation>Un mois</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="425"/>
        <source>Year by week</source>
        <translation>Année par semaine</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="430"/>
        <source>Year by month</source>
        <translation>Année par mois</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="446"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;SWOLF efficiency score&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="449"/>
        <source>Efficiency</source>
        <translation>Efficience</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="456"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Stroke length&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="466"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Stroke rate&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="476"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Speed = Seconds per 100m&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="499"/>
        <source>Today</source>
        <translation>Aujourd&apos;hui</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="542"/>
        <source>Download...</source>
        <translation>Télécharger...</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="552"/>
        <source>Config...</source>
        <translation>Configuration...</translation>
    </message>
    <message>
        <location filename="../ui/summary.ui" line="575"/>
        <source>Close</source>
        <translation>Fermer</translation>
    </message>
</context>
<context>
    <name>SummaryImpl</name>
    <message>
        <location filename="../src/summaryimpl.cpp" line="449"/>
        <source>Delete wrk</source>
        <translation>Effacer Entr.</translation>
    </message>
    <message>
        <location filename="../src/summaryimpl.cpp" line="475"/>
        <source>Delete exercise set</source>
        <translation>Effacer l&apos;exercice</translation>
    </message>
    <message>
        <location filename="../src/summaryimpl.cpp" line="476"/>
        <source>Delete the selected exercise set?</source>
        <translation>Voulez-vous effacer l&apos;exercice séléctionné ?</translation>
    </message>
    <message>
        <location filename="../src/summaryimpl.cpp" line="493"/>
        <source>Delete entire exercise</source>
        <translation>Effacer l&apos;entraînement</translation>
    </message>
    <message>
        <location filename="../src/summaryimpl.cpp" line="494"/>
        <source>Delete the selected exercises?</source>
        <translation>Voulez-vous effacer l&apos;entraînement séléctionné ?</translation>
    </message>
    <message>
        <location filename="../src/summaryimpl.cpp" line="546"/>
        <source>Save Data</source>
        <translation>Sauvegarder</translation>
    </message>
    <message>
        <location filename="../src/summaryimpl.cpp" line="548"/>
        <source>Comma separated files (*.csv *.txt)</source>
        <translation>Texte CSV</translation>
    </message>
    <message>
        <location filename="../src/summaryimpl.cpp" line="582"/>
        <source>Print Chart</source>
        <translation>Imprimer graphique</translation>
    </message>
</context>
<context>
    <name>UploadDlg</name>
    <message>
        <location filename="../ui/upload.ui" line="14"/>
        <source>Upload</source>
        <translation>Téléchargement</translation>
    </message>
    <message>
        <location filename="../ui/upload.ui" line="26"/>
        <source>Sync watch...</source>
        <translation>Synchro...</translation>
    </message>
    <message>
        <location filename="../ui/upload.ui" line="39"/>
        <source>Load csv...</source>
        <translation>Charger csv...</translation>
    </message>
    <message>
        <location filename="../ui/upload.ui" line="68"/>
        <source>Select All</source>
        <translation>Tout sélect.</translation>
    </message>
    <message>
        <location filename="../ui/upload.ui" line="81"/>
        <source>Select None</source>
        <translation>Vider sélect.</translation>
    </message>
    <message>
        <location filename="../ui/upload.ui" line="94"/>
        <source>Import</source>
        <translation>Importer</translation>
    </message>
    <message>
        <location filename="../ui/upload.ui" line="110"/>
        <source>Exercise</source>
        <translation>Entraîn.</translation>
    </message>
    <message>
        <location filename="../ui/upload.ui" line="123"/>
        <source>Date</source>
        <translation>Date</translation>
    </message>
    <message>
        <location filename="../ui/upload.ui" line="136"/>
        <source>Lengths</source>
        <translation>Longs</translation>
    </message>
    <message>
        <location filename="../ui/upload.ui" line="149"/>
        <source>Cancel</source>
        <translation>Annuler</translation>
    </message>
</context>
<context>
    <name>UploadImpl</name>
    <message>
        <location filename="../src/uploadimpl.cpp" line="95"/>
        <source>Import Exercise Data</source>
        <translation>Importer données d&apos;entraînement</translation>
    </message>
    <message>
        <location filename="../src/uploadimpl.cpp" line="97"/>
        <source>Comma separated files (*.csv *.txt)</source>
        <translation>Texte CSV (*.csv *.txt)</translation>
    </message>
</context>
<context>
    <name>syncDlg</name>
    <message>
        <location filename="../ui/sync.ui" line="14"/>
        <source>Sync</source>
        <translation>Synchroniser</translation>
    </message>
    <message>
        <location filename="../ui/sync.ui" line="70"/>
        <source>Place poolmate in pod to start upload.</source>
        <translation>Placez la montre sur son support pour commencer.</translation>
    </message>
</context>
</TS>
