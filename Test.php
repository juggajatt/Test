<?php
$data = file_get_contents ('Data.json');
$json = json_decode($data);

foreach ($json->Items as $item)
{
    if($item->ID == 2)
    {
      echo $item -> Text;
    }
}
?>
